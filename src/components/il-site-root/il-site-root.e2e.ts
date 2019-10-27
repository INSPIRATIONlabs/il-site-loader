import { newE2EPage } from '@stencil/core/testing';

describe('il-site-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<il-site-root></il-site-root>');

    const element = await page.find('il-site-root');
    expect(element).toHaveClass('hydrated');
  });

  it('has a router', async () => {
    const page = await newE2EPage();
    await page.setContent('<il-site-root></il-site-root>');

    const element = await page.find('il-site-root >>> stencil-router');
    expect(element).toHaveClass('hydrated');
  });

  it('has a il-site-loader component', async () => {
    const page = await newE2EPage();
    await page.setContent('<il-site-root></il-site-root>');

    const element = await page.find('il-site-root >>> il-site-loader');
    expect(element).toHaveClass('hydrated');
  });
});
