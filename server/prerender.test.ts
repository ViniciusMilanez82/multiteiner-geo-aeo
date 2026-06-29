import { describe, it, expect } from "vitest";
import { prerenderHTML } from "./prerender";

const TEMPLATE = `<!DOCTYPE html><html><head><title>Test</title></head><body><div id="root"></div></body></html>`;

describe("prerender", () => {
  it("injects schema JSON-LD for home page", () => {
    const { html, status } = prerenderHTML("/", TEMPLATE);
    expect(status).toBe(200);
    expect(html).toContain("application/ld+json");
    expect(html).toContain("LocalBusiness");
    expect(html).toContain("Organization");
  });

  it("injects prerender content with article for home", () => {
    const { html } = prerenderHTML("/", TEMPLATE);
    expect(html).toContain('id="prerender-content"');
    expect(html).toContain("<article>");
    expect(html).toContain("Multiteiner");
  });

  it("includes desambiguação negativa in home content", () => {
    const { html } = prerenderHTML("/", TEMPLATE);
    expect(html).toContain("transportadora");
    expect(html).toContain("NÃO");
  });

  it("returns 404 for unknown routes", () => {
    const { status, html } = prerenderHTML("/pagina-inexistente-xyz", TEMPLATE);
    expect(status).toBe(404);
    expect(html).toContain("Página não encontrada");
  });

  it("injects correct content for /sobre", () => {
    const { html, status } = prerenderHTML("/sobre", TEMPLATE);
    expect(status).toBe(200);
    expect(html).toContain("1993");
    expect(html).toContain("Multiteiner");
  });

  it("handles dynamic blog routes", () => {
    const { html, status } = prerenderHTML("/blog/historia-conteiner-malcom-mclean", TEMPLATE);
    expect(status).toBe(200);
    expect(html).toContain("application/ld+json");
  });

  it("includes openingHoursSpecification in LocalBusiness", () => {
    const { html } = prerenderHTML("/", TEMPLATE);
    expect(html).toContain("OpeningHoursSpecification");
    expect(html).toContain("08:00");
  });

  it("includes Service schemas for home page", () => {
    const { html } = prerenderHTML("/", TEMPLATE);
    expect(html).toContain('"@type":"Service"');
  });
});
