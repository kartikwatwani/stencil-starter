import { newE2EPage } from '@stencil/core/testing';

describe('questions-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<questions-viewer></questions-viewer>');

    const element = await page.find('questions-viewer');
    expect(element).toHaveClass('hydrated');
  });
});
