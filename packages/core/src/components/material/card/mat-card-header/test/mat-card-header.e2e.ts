import { newE2EPage } from '@stencil/core/testing';

describe('mat-card-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-card-header></mat-card-header>');

    const element = await page.find('mat-card-header');
    expect(element).toHaveClass('hydrated');
  });
});
