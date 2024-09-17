import { newSpecPage } from '@stencil/core/testing';
import { MatCard } from '../mat-card';

describe('mat-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MatCard],
      html: `<mat-card></mat-card>`,
    });
    expect(page.root).toEqualHtml(`
      <mat-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mat-card>
    `);
  });
});
