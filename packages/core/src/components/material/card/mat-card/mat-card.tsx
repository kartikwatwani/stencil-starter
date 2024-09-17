import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mat-card',
  styleUrl: 'mat-card.scss',
  shadow: false,
})
export class MatCard {
  render() {
    return (
      <Host class="mat-mdc-card card">
       
        <slot></slot>
        
      
      </Host>
    );
  }
}
