import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'mat-card-image',
  styleUrl: 'mat-card-image.scss',
  shadow: false,
})
export class MatCardImage {
  @Prop() src: string;
  render() {
    return (
      <Host >
        <img src={this.src} class="mdc-card__media" />
      </Host>
    );
  }
}
