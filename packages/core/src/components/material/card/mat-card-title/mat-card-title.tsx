import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mat-card-title',
  styleUrl: 'mat-card-title.scss',
  shadow: false,
})
export class MatCardTitle {
  render() {
    return (
      <Host class="mat-mdc-card-title">
        <slot></slot>
      </Host>
    );
  }
}
