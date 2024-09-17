import { newSpecPage } from '@stencil/core/testing';
import { QuestionsViewer } from '../questions-viewer';

describe('questions-viewer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuestionsViewer],
      html: `<questions-viewer></questions-viewer>`,
    });
    expect(page.root).toEqualHtml(`
      <questions-viewer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </questions-viewer>
    `);
  });
});
