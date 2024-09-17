import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mat-card-subtitle',
  styleUrl: 'mat-card-subtitle.scss',
  shadow: false,
})
export class MatCardSubtitle {
  render() {
    return (
      <Host class="mat-mdc-card-subtitle">
        <slot></slot>
      </Host>
    );
  }
}
