import { newE2EPage } from "@stencil/core/testing";

describe("il-default-template", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<il-default-template></il-default-template>");

    const element = await page.find("il-default-template");
    expect(element).toHaveClass("hydrated");
  });
});
