import { Component, Host, State, h } from '@stencil/core';
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
      image: 'https://workern-assets.b-cdn.net/inner-growth/welcome.jpeg',
      body: 'Welcome! Your Inner Journey Begins here. We are here to support you in your journey of self-discovery and personal growth.',
    },
    {
      title: 'About You',
      image: 'https://workern-assets.b-cdn.net/inner-growth/about-you.webp',
      body: 'We can take the next step only from the position where we currently are. For us to support you, please answer the questions that follow.',
    },
    {
      title: 'Preferences',
      questions: [
        {
          type: 'chips',
          id: 'aspectToImprove',
          text: 'What aspect of your life would you like to improve?',
          options: ['Health', 'Joy', 'Love', 'Success', 'Energy'],
        },
        {
          type: 'slider',
          id: 'timeCommittment',
          text: 'How many minutes can you commit for your wellbeing each day for the next 40 days?',
          min: 5,
          max: 60,
        },
      ],
    },
    {
      title: 'Accountability',
      body: 'Keeping track of the progress is important. In a few words, share your current state in the aspect you wish to improve. We will reflect on it after 40 days, a period we refer to as Mandala in yogic tradition.',
      questions: [
        {
          type: 'textfield',
          id: 'currentStateMessage',
          label: 'Current State',
          valueType: 'textarea',
        },
      ],
    },
    {
      title: 'All Set!',
      image: 'https://workern-assets.b-cdn.net/inner-growth/ready-to-go.webp',
      body: 'Based on your preferences, we have selected a Sadhana for you. Let the journey begin!',
    },
  ];

  @State() answers = {
    aspect: '',
    timeCommittment: 0,
    currentStateMessage: '',
  };

  @State() activeIndex = 0;
  @State() animating = false;

  handleValueChange(event: CustomEvent<string>) {
    console.log(event);
  }

  render() {
    return (
      <Host>
        <div class="center">
          <mat-card class="card">
            <div class="carousel">
              <div
                class="cards-container"
                style={{
                  transform: `translateX(-${this.activeIndex * 100}%)`,
                }}
              >
                {this.cards.map(card => (
                  <div class="content">{this.renderContent(card)}</div>
                ))}
              </div>
            </div>
            <mat-card-actions
              style={{
                justifyContent: 'space-between',
                margin: '8px',
                gap: '8px',
              }}
            >
              <div>
                {this.activeIndex > 0 && (
                  <md-outlined-button
                    onClick={() => this.onPrev()}
                    disabled={this.animating}
                  >
                    Back
                  </md-outlined-button>
                )}
              </div>
              <div>
                {this.activeIndex < this.cards.length - 1 && (
                  <md-filled-button
                    onClick={() => this.onNext()}
                    disabled={this.animating}
                  >
                    Next
                  </md-filled-button>
                )}
              </div>
            </mat-card-actions>
          </mat-card>
        </div>
      </Host>
    );
  }

  renderContent(card) {
    return (
      <div>
        <mat-card-header style={{ marginBottom: '16px' }}>
          <div>
            <mat-card-title>{card.title}</mat-card-title>
          </div>
        </mat-card-header>

        <mat-card-content>
          {card.image && <img src={card.image} />}
          {card.body && <p>{card.body}</p>}
          {card.questions && (
            <questions-viewer questions={card.questions}></questions-viewer>
          )}
        </mat-card-content>
      </div>
    );
  }

  onNext() {
    if (this.activeIndex < this.cards.length - 1 && !this.animating) {
      this.activeIndex++;
    }
  }

  onPrev() {
    if (this.activeIndex > 0 && !this.animating) {
      this.activeIndex--;
    }
  }
}
