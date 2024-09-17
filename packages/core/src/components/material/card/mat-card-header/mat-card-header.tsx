import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mat-card-header',
  styleUrl: 'mat-card-header.scss',
  shadow: false,
})
export class MatCardHeader {
  render() {
    return (
      <Host class="mat-mdc-card-header">
        <slot></slot>
      </Host>
    );
  }
}
