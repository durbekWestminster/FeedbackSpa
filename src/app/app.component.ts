import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {ButtonComponent} from './components/button/button.component';
import {FeedbacksComponent} from './components/feedbacks/feedbacks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    FeedbacksComponent,
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FeedbackSpa';
}
