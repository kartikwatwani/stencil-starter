import { newSpecPage } from '@stencil/core/testing';
import { YogaVideos } from './yoga-videos';

describe('inner-growth', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [YogaVideos],
      html: '<inner-growth></inner-growth>',
    });
    expect(root).toEqualHtml(`
      <inner-growth>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </inner-growth>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [YogaVideos],
      html: `<inner-growth first="Stencil" last="'Don't call me a framework' JS"></inner-growth>`,
    });
    expect(root).toEqualHtml(`
      <inner-growth first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </inner-growth>
    `);
  });
});
