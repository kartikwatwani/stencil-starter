import {
  Component,
  h,
  Element,
  Prop,
  Method,
  Listen,
  Event,
  EventEmitter,
  State,
} from '@stencil/core';

@Component({
  tag: 'youtube-player',
  styleUrl: 'youtube-player.css',
  shadow: true,
})
export class YoutubePlayer {
  iframe!: HTMLElement;
  backdrop!: HTMLElement;
  loader!: HTMLElement;
  @Element() host: HTMLElement;

  @Prop({ reflect: true, mutable: true }) videoId: string;
  @Prop({ reflect: true, mutable: true }) width: string;
  @Prop({ reflect: true, mutable: true }) height: string;

  @State() load = true;

  @Event({
    eventName: 'ready',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  playerReady: EventEmitter;

  @Event({
    eventName: 'stateChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  playerStateChange: EventEmitter;

  player;

  // Method to play a video and append rel=0 to the video URL
  @Method()
  play(video: string): void {
    const VID_REGEX =
      /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    if (video) {
      const resolveVideo = video.match(VID_REGEX)[1];
      // Add rel=0 to the video ID
      this.player.loadVideoById({
        videoId: resolveVideo,
        playerVars: { rel: 0 },
      });
      this.videoId = video;
    } else {
      this.player.playVideo();
    }
  }

  @Listen('onReady')
  readyIframeHandler(event: CustomEvent) {
    console.log('readyIframeHandler', event);
    this.backdrop.style.display = 'none';
  }

  @Method()
  stop(): void {
    this.player.stopVideo();
  }

  @Method()
  pause(): void {
    this.player.pauseVideo();
  }

  render() {
    return (
      <host>
        <section
          class="backdrop"
          ref={el => (this.backdrop = el as HTMLElement)}
        >
          <div class="loader" ref={el => (this.loader = el as HTMLElement)}>
            Loading...
          </div>
        </section>
        <div id="player" ref={el => (this.iframe = el as HTMLElement)}></div>
      </host>
    );
  }

  componentDidLoad() {
    // Check if the YouTube iframe API script already exists
    if (
      !document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      )
    ) {
      // Create the script only if it doesn't already exist
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window['onYouTubeIframeAPIReady'] = () => {
        this.createPlayer();
      };
    } else {
      this.createPlayer();
    }
  }

  onPlayerReady() {
    this.playerReady.emit();
    this.load = false;
  }

  createPlayer() {
    this.player = new window['YT'].Player(this.iframe, {
      height: this.height ? this.height : '390',
      width: this.width ? this.width : '640',
      videoId: this.videoId ? this.videoId : 'M7lc1UVf-VE',
      playerVars: { rel: 0 }, // Appending rel=0 here
      events: {
        onReady: this.onPlayerReady.bind(this),
        onStateChange: this.onStateChange.bind(this),
      },
    });
  }

  onStateChange(event) {
    this.playerStateChange.emit(event);
  }

  ready() {}
}
