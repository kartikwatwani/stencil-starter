import { newE2EPage } from '@stencil/core/testing';

describe('mat-card-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-card-avatar></mat-card-avatar>');

    const element = await page.find('mat-card-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
