import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'inner-journey',
  styleUrl: 'inner-journey.css',
  shadow: true,
})
export class InnerJourney {
  @Prop() milestones: Array<{ id: number, label: string }> = [{ "id": 1, "label": "Start" }, { "id": 2, "label": "Milestone 1" }, { "id": 3, "label": "Milestone 2" }, { "id": 4, "label": "End" }]

  renderMilestone(milestone, index) {
    const isRight = index % 2 === 0;
    return (
      <div class={`milestone ${isRight ? 'right' : 'left'}`}>
        {milestone.label}
      </div>
    );
  }

  render() {
    console.log(this.milestones);
    return (
      <Host>
      
    
        <div class="container">
        {this.milestones.map((milestone, index) => this.renderMilestone(milestone, index))}
      </div>
 
      </Host>
    );
  }
}
