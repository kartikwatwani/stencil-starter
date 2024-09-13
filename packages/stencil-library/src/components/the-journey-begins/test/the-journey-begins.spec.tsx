import { newSpecPage } from '@stencil/core/testing';
import { TheJourneyBegins } from '../the-journey-begins';

describe('the-journey-begins', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TheJourneyBegins],
      html: `<the-journey-begins></the-journey-begins>`,
    });
    expect(page.root).toEqualHtml(`
      <the-journey-begins>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </the-journey-begins>
    `);
  });
});
