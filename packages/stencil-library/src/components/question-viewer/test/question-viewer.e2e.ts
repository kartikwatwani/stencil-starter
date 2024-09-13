import { newE2EPage } from '@stencil/core/testing';

describe('question-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<question-viewer></question-viewer>');

    const element = await page.find('question-viewer');
    expect(element).toHaveClass('hydrated');
  });
});
