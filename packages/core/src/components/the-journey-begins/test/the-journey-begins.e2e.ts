import { newE2EPage } from '@stencil/core/testing';

describe('the-journey-begins', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<the-journey-begins></the-journey-begins>');

    const element = await page.find('the-journey-begins');
    expect(element).toHaveClass('hydrated');
  });
});
