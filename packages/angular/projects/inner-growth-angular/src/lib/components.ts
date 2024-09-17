/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from 'inner-growth/standalone';

import { defineCustomElement as defineTheJourneyBegins } from 'inner-growth/standalone/the-journey-begins.js';
import { defineCustomElement as defineYogaVideos } from 'inner-growth/standalone/yoga-videos.js';
import { defineCustomElement as defineYoutubePlayer } from 'inner-growth/standalone/youtube-player.js';
@ProxyCmp({
  defineCustomElementFn: defineTheJourneyBegins
})
@Component({
  selector: 'the-journey-begins',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class TheJourneyBegins {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TheJourneyBegins extends Components.TheJourneyBegins {}


@ProxyCmp({
  defineCustomElementFn: defineYogaVideos,
  inputs: ['videos']
})
@Component({
  selector: 'yoga-videos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['videos'],
  standalone: true
})
export class YogaVideos {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface YogaVideos extends Components.YogaVideos {}


@ProxyCmp({
  defineCustomElementFn: defineYoutubePlayer,
  inputs: ['height', 'videoId', 'width'],
  methods: ['play', 'stop', 'pause']
})
@Component({
  selector: 'youtube-player',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'videoId', 'width'],
  standalone: true
})
export class YoutubePlayer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ready', 'stateChange']);
  }
}


export declare interface YoutubePlayer extends Components.YoutubePlayer {

  ready: EventEmitter<CustomEvent<any>>;

  stateChange: EventEmitter<CustomEvent<any>>;
}


