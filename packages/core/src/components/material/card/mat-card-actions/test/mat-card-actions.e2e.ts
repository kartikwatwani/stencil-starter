import { newE2EPage } from '@stencil/core/testing';

describe('mat-card-actions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mat-card-actions></mat-card-actions>');

    const element = await page.find('mat-card-actions');
    expect(element).toHaveClass('hydrated');
  });
});
