import { newSpecPage } from '@stencil/core/testing';
import { MatCardHeader } from '../mat-card-header';

describe('mat-card-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MatCardHeader],
      html: `<mat-card-header></mat-card-header>`,
    });
    expect(page.root).toEqualHtml(`
      <mat-card-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mat-card-header>
    `);
  });
});
