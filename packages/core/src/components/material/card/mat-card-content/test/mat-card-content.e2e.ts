import { newE2EPage } from '@stencil/core/testing';

describe('mat-card-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-card-content></mat-card-content>');

    const element = await page.find('mat-card-content');
    expect(element).toHaveClass('hydrated');
  });
});
