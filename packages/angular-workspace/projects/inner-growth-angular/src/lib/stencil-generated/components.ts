/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from 'inner-growth/components';

import { defineCustomElement as defineInnerGrowth } from 'inner-growth/components/inner-growth.js';
import { defineCustomElement as defineInnerJourney } from 'inner-growth/components/inner-journey.js';
import { defineCustomElement as defineMatCard } from 'inner-growth/components/mat-card.js';
import { defineCustomElement as defineMatCardActions } from 'inner-growth/components/mat-card-actions.js';
import { defineCustomElement as defineMatCardAvatar } from 'inner-growth/components/mat-card-avatar.js';
import { defineCustomElement as defineMatCardContent } from 'inner-growth/components/mat-card-content.js';
import { defineCustomElement as defineMatCardHeader } from 'inner-growth/components/mat-card-header.js';
import { defineCustomElement as defineMatCardImage } from 'inner-growth/components/mat-card-image.js';
import { defineCustomElement as defineMatCardSubtitle } from 'inner-growth/components/mat-card-subtitle.js';
import { defineCustomElement as defineMatCardTitle } from 'inner-growth/components/mat-card-title.js';
import { defineCustomElement as defineQuestionViewer } from 'inner-growth/components/question-viewer.js';
import { defineCustomElement as defineTheJourneyBegins } from 'inner-growth/components/the-journey-begins.js';
import { defineCustomElement as defineYoutubePlayer } from 'inner-growth/components/youtube-player.js';
@ProxyCmp({
  defineCustomElementFn: defineInnerGrowth,
  inputs: ['videos']
})
@Component({
  selector: 'inner-growth',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['videos'],
  standalone: true
})
export class InnerGrowth {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnerGrowth extends Components.InnerGrowth {}


@ProxyCmp({
  defineCustomElementFn: defineInnerJourney,
  inputs: ['milestones']
})
@Component({
  selector: 'inner-journey',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['milestones'],
  standalone: true
})
export class InnerJourney {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InnerJourney extends Components.InnerJourney {}


@ProxyCmp({
  defineCustomElementFn: defineMatCard
})
@Component({
  selector: 'mat-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class MatCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MatCard extends Components.MatCard {}


@ProxyCmp({
  defineCustomElementFn: defineMatCardActions
})
@Component({
  selector: 'mat-card-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class MatCardActions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MatCardActions extends Components.MatCardActions {}


@ProxyCmp({
  defineCustomElementFn: defineMatCardAvatar
})
@Component({
  selector: 'mat-card-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class MatCardAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MatCardAvatar extends Components.MatCardAvatar {}


@ProxyCmp({
  defineCustomElementFn: defineMatCardContent
})
@Component({
  selector: 'mat-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class MatCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MatCardContent extends Components.MatCardContent {}


@ProxyCmp({
  defineCustomElementFn: defineMatCardHeader
})
@Component({
  selector: 'mat-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class MatCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MatCardHeader extends Components.MatCardHeader {}


@ProxyCmp({
  defineCustomElementFn: defineMatCardImage,
  inputs: ['src']
})
@Component({
  selector: 'mat-card-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['src'],
  standalone: true
})
export class MatCardImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MatCardImage extends Components.MatCardImage {}


@ProxyCmp({
  defineCustomElementFn: defineMatCardSubtitle
})
@Component({
  selector: 'mat-card-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class MatCardSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MatCardSubtitle extends Components.MatCardSubtitle {}


@ProxyCmp({
  defineCustomElementFn: defineMatCardTitle
})
@Component({
  selector: 'mat-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class MatCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MatCardTitle extends Components.MatCardTitle {}


@ProxyCmp({
  defineCustomElementFn: defineQuestionViewer
})
@Component({
  selector: 'question-viewer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class QuestionViewer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface QuestionViewer extends Components.QuestionViewer {}


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


