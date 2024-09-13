import { Component, Host, State, getAssetPath, h } from '@stencil/core';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
@Component({
  tag: 'the-journey-begins',
  styleUrl: 'the-journey-begins.css',
  shadow: false,
  assetsDirs: ['assets'],
})
export class TheJourneyBegins {
  cards = [
    {
      title: 'Your Inner Journey Begins Here',
      image: 'isha-yoga-center-entrance.jpeg',
      next: 'Next',
      body: 'Hello',
    },
    {
      title: 'About You',
      prev: 'Back',
      next: 'Next',
      body: 'We can take a next step only from the position where we currently. For us to support you, please answer the questions that follow.',
    },
  ];
  @State() activeIndex = 0;
  render() {
    const card: any = this.cards[this.activeIndex];
    const cardClass = this.activeIndex === 0 ? 'card-enter' : 'card-exit';
    return (
      <Host>
        <div class="container">
          <mat-card class={`card ${cardClass}`}>
            <mat-card-header style={{ marginBottom: '16px' }}>
              <div>
                <mat-card-title>{card.title}</mat-card-title>
              </div>
            </mat-card-header>

            <mat-card-content>
              {card.image && (
                <img src={getAssetPath(`./assets/${card.image}`)} />
              )}
              {/* {card.questions && <li>{card.questions.map(question => {})}</li>} */}

              {card.body && <p>{card.body}</p>}
            </mat-card-content>
            <mat-card-actions
              style={{ justifyContent: 'right', margin: '8px', gap: '8px' }}
            >
              {card.prev && (
                <md-outlined-button onClick={() => this.onPrev()}>
                  {card.prev}
                </md-outlined-button>
              )}
              {card.next && (
                <md-filled-button onClick={() => this.onNext()}>
                  {card.next}
                </md-filled-button>
              )}
            </mat-card-actions>
          </mat-card>
        </div>
      </Host>
    );
  }

  onNext() {
    this.activeIndex++;
    console.log('On Next Called');
  }

  onPrev() {
    this.activeIndex--;
  }
}
