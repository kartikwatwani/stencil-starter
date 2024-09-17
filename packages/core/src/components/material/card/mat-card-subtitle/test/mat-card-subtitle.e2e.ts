import { newE2EPage } from '@stencil/core/testing';

describe('mat-card-subtitle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-card-subtitle></mat-card-subtitle>');

    const element = await page.find('mat-card-subtitle');
    expect(element).toHaveClass('hydrated');
  });
});
