import { newSpecPage } from '@stencil/core/testing';
import { MatCardSubtitle } from '../mat-card-subtitle';

describe('mat-card-subtitle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MatCardSubtitle],
      html: `<mat-card-subtitle></mat-card-subtitle>`,
    });
    expect(page.root).toEqualHtml(`
      <mat-card-subtitle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mat-card-subtitle>
    `);
  });
});
