import { newE2EPage } from '@stencil/core/testing';

describe('youtube-player', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<youtube-player></youtube-player>');

    const element = await page.find('youtube-player');
    expect(element).toHaveClass('hydrated');
  });
});
