import { newSpecPage } from '@stencil/core/testing';
import { QuestionViewer } from '../question-viewer';

describe('question-viewer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuestionViewer],
      html: `<question-viewer></question-viewer>`,
    });
    expect(page.root).toEqualHtml(`
      <question-viewer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </question-viewer>
    `);
  });
});
