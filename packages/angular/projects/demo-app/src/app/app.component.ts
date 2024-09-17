import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {TheJourneyBegins } from 'inner-growth-angular';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
}
