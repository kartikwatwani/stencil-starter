import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mat-card-content',
  styleUrl: 'mat-card-content.scss',
  shadow: false,
})
export class MatCardContent {
  render() {
    return (
      <Host  class="mat-mdc-card-content">
      
        <slot></slot>
      
      
      </Host>
    );
  }
}
