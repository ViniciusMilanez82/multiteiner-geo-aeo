import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

const orcamentoRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        company: z.string().optional(),
        product: z.string().optional(),
        segment: z.string().optional(),
        modality: z.string().optional(),
        quantity: z.string().optional(),
        deadline: z.string().optional(),
        message: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const content = `
Novo orçamento solicitado:

Nome: ${input.name}
E-mail: ${input.email}
Telefone: ${input.phone}
Empresa: ${input.company ?? "—"}
Produto: ${input.product ?? "—"}
Segmento: ${input.segment ?? "—"}
Modalidade: ${input.modality ?? "—"}
Quantidade: ${input.quantity ?? "—"}
Prazo: ${input.deadline ?? "—"}
Mensagem: ${input.message ?? "—"}
      `.trim();

      await notifyOwner({
        title: `Novo orçamento de ${input.name}`,
        content,
      });

      return { success: true };
    }),
});

export const appRouter = router({
  system: systemRouter,
  orcamento: orcamentoRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
