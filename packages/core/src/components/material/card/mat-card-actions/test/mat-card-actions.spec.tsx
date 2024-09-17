import { newSpecPage } from '@stencil/core/testing';
import { MatCardActions } from '../mat-card-actions';

describe('mat-card-actions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MatCardActions],
      html: `<mat-card-actions></mat-card-actions>`,
    });
    expect(page.root).toEqualHtml(`
      <mat-card-actions>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mat-card-actions>
    `);
  });
});
