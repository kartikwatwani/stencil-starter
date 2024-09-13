import { Component, Prop, State, h } from '@stencil/core';


@Component({
  tag: 'inner-growth',
  styleUrl: 'inner-growth.css',
  shadow: true,
})
export class InnerGrowth {



  /**
   * The list of videos
   */
  @Prop()  videos = [
    {
      videoId: 'szDAIiU-eSI',
      thumbnail: 'https://img.youtube.com/vi/szDAIiU-eSI/0.jpg',
      title: 'Become an Offering',
    },
    {
      videoId: 'q5m6tMjcF8k',
      thumbnail: 'https://img.youtube.com/vi/q5m6tMjcF8k/0.jpg',
      title: 'Yoga for Peace',
    },
    {
      videoId: 'Y5PU2fHxHnk',
      thumbnail: 'https://img.youtube.com/vi/Y5PU2fHxHnk/0.jpg',
    },
    {
      videoId: 'FzwqPzJaDQE',
      thumbnail: 'https://img.youtube.com/vi/FzwqPzJaDQE/0.jpg',
      title: '5 Minutes for Joy',
    },
    {
      videoId: '2uCpi3tPt3o',
      thumbnail: 'https://img.youtube.com/vi/2uCpi3tPt3o/0.jpg',
      title: 'Yoga For Health',
    },
    {
      videoId: 'pcmY538QF7I',
      thumbnail: 'https://img.youtube.com/vi/pcmY538QF7I/0.jpg',
      title: '5 Minutes for Love',
    },
    {
      videoId: 'VHJPmGnsu4g',
      thumbnail: 'https://img.youtube.com/vi/VHJPmGnsu4g/0.jpg',
      title: '5 Minutes for Success',
    },
    {
      videoId: 'DjOh12NcFT0',
      thumbnail: 'https://img.youtube.com/vi/DjOh12NcFT0/0.jpg',
      title: 'Isha Kriya',
    },
    {
      videoId: '301lCxLGnnE',
      thumbnail: 'https://img.youtube.com/vi/301lCxLGnnE/0.jpg',
      title: 'Yoga For Joy - Practice',
    },
    {
      videoId: 'sh5FJOIkf40',
      thumbnail: 'https://img.youtube.com/vi/sh5FJOIkf40/0.jpg',
      title: 'Yoga For Inner Exploration - Shambhavi Mudra',
    },
  ];



  @State() currentVideoId: string;
  @State() isPlaying: boolean;

  playVideo(videoId: string) {
   
    this.currentVideoId = videoId;
    this.isPlaying = true;
  }


  closePlayer() {
    
    this.isPlaying = false;
    this.currentVideoId = '';
  }

  onPlayerReady(event: any) {
    console.log('Player ready', event);
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    console.log('Player state changed', event);
    if (event.data === 0) {
      // Video has ended
      this.closePlayer();
    }
  }

  render() {
    return (
      <div>
        <div class="video-grid">
          {this.videos.map((video) => (
            <div class="video-wrapper">
              <div class="video-thumbnail" onClick={() => this.playVideo(video.videoId)}>
                <img width="320" class="video-thumbnail-img" src={video.thumbnail} />
              </div>
              <div class="video-title">{video.title}</div> {/* Title outside of thumbnail */}
            </div>
          ))}
        </div>
  
        {this.isPlaying && (
          <div class={{ 'active': this.isPlaying, 'video-player': true }} onClick={() => this.closePlayer()}>
            <div class="player-container" onClick={(event) => event.stopPropagation()}>
              <youtube-player
                videoId={this.currentVideoId}
                onReady={(event) => this.onPlayerReady(event)}
                onStateChange={(event) => this.onPlayerStateChange(event)}
              ></youtube-player>
            </div>
          </div>
        )}
      </div>
    );
  }

}