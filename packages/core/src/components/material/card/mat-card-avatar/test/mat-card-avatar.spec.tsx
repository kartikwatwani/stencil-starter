import { newSpecPage } from '@stencil/core/testing';
import { MatCardAvatar } from '../mat-card-avatar';

describe('mat-card-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MatCardAvatar],
      html: `<mat-card-avatar></mat-card-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <mat-card-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mat-card-avatar>
    `);
  });
});
