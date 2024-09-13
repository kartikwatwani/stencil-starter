import { newSpecPage } from '@stencil/core/testing';
import { MatCardTitle } from '../mat-card-title';

describe('mat-card-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MatCardTitle],
      html: `<mat-card-title></mat-card-title>`,
    });
    expect(page.root).toEqualHtml(`
      <mat-card-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mat-card-title>
    `);
  });
});
