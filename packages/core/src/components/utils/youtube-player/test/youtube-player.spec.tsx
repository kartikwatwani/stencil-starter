import { newSpecPage } from '@stencil/core/testing';
import { YoutubePlayer } from '../youtube-player';

describe('youtube-player', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YoutubePlayer],
      html: `<youtube-player></youtube-player>`,
    });
    expect(page.root).toEqualHtml(`
      <youtube-player>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </youtube-player>
    `);
  });
});
