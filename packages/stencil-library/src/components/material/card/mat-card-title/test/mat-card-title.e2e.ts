import { newE2EPage } from '@stencil/core/testing';

describe('mat-card-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-card-title></mat-card-title>');

    const element = await page.find('mat-card-title');
    expect(element).toHaveClass('hydrated');
  });
});
