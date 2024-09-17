import { newE2EPage } from '@stencil/core/testing';

describe('mat-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-card></mat-card>');

    const element = await page.find('mat-card');
    expect(element).toHaveClass('hydrated');
  });
});
