import { newE2EPage } from '@stencil/core/testing';

describe('inner-journey', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<inner-journey></inner-journey>');

    const element = await page.find('inner-journey');
    expect(element).toHaveClass('hydrated');
  });
});
