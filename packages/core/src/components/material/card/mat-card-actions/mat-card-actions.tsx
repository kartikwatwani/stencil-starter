import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mat-card-actions',
  styleUrl: 'mat-card-actions.scss',
  shadow: false,
})
export class MatCardActions {
  render() {
    return (
      <Host class="mat-mdc-card-actions">
        <slot></slot>
      </Host>
    );
  }
}
