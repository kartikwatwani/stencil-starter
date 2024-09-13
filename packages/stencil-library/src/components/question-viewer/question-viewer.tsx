import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'question-viewer',
  styleUrl: 'question-viewer.scss',
  shadow: true,
})
export class QuestionViewer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
