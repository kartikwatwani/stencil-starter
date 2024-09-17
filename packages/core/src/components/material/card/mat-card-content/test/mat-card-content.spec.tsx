import { newSpecPage } from '@stencil/core/testing';
import { MatCardContent } from '../mat-card-content';

describe('mat-card-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MatCardContent],
      html: `<mat-card-content></mat-card-content>`,
    });
    expect(page.root).toEqualHtml(`
      <mat-card-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mat-card-content>
    `);
  });
});
