import { newSpecPage } from '@stencil/core/testing';
import { MatCardImage } from '../mat-card-image';

describe('mat-card-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MatCardImage],
      html: `<mat-card-image></mat-card-image>`,
    });
    expect(page.root).toEqualHtml(`
      <mat-card-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mat-card-image>
    `);
  });
});
