import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock notifyOwner to avoid real network calls
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("orcamento.submit", () => {
  it("accepts valid submission and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.orcamento.submit({
      name: "Vinicius Multiteiner",
      email: "vinicius@multiteiner.com.br",
      phone: "(11) 99999-9999",
      company: "Multiteiner",
      product: "Contêineres",
      segment: "Construção Civil",
      modality: "Locação",
      quantity: "2 unidades",
      deadline: "30 dias",
      message: "Preciso de 2 contêineres para escritório de obra.",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.orcamento.submit({
        name: "Teste",
        email: "email-invalido",
        phone: "(11) 99999-9999",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.orcamento.submit({
        name: "",
        email: "teste@email.com",
        phone: "(11) 99999-9999",
      })
    ).rejects.toThrow();
  });

  it("accepts minimal submission (name, email, phone only)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.orcamento.submit({
      name: "João Silva",
      email: "joao@empresa.com.br",
      phone: "(21) 98888-7777",
    });

    expect(result).toEqual({ success: true });
  });
});

describe("auth.me", () => {
  it("returns null for unauthenticated user", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.me();
    expect(result).toBeNull();
  });
});
