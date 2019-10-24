import { newSpecPage } from '@stencil/core/testing';
import { IlDefaultTemplate } from "./il-default-template";

describe("il-default-template", () => {

  it("builds", () => {
    expect(new IlDefaultTemplate()).toBeTruthy();
  });

  it('should render my empty component', async () => {
    const page = await newSpecPage({
      components: [IlDefaultTemplate],
      html: `<il-default-template></il-default-template>`,
    });
    expect(page.root).toEqualHtml(`
      <il-default-template><mock:shadow-root></mock:shadow-root></il-default-template>
    `);
  });

  it('should toggle the checked property', () => {

  });

});
