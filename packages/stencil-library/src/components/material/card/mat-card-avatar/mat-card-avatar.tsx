import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mat-card-avatar',
  styleUrl: 'mat-card-avatar.scss',
  shadow: false,
})
export class MatCardAvatar {
  render() {
    return (
      <Host class="mat-mdc-card-avatar">
        <slot></slot>
      </Host>
    );
  }
}
