import { newSpecPage } from '@stencil/core/testing';
import { InnerJourney } from '../inner-journey';

describe('inner-journey', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InnerJourney],
      html: `<inner-journey></inner-journey>`,
    });
    expect(page.root).toEqualHtml(`
      <inner-journey>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </inner-journey>
    `);
  });
});
