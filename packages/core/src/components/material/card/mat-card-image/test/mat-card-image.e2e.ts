import { newE2EPage } from '@stencil/core/testing';

describe('mat-card-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-card-image></mat-card-image>');

    const element = await page.find('mat-card-image');
    expect(element).toHaveClass('hydrated');
  });
});
