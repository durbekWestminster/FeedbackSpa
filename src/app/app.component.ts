import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {ButtonComponent} from './components/button/button.component';
import {FeedbacksComponent} from './components/feedbacks/feedbacks.component';
import {AddFeedbackComponent} from './components/add.feedback/add.feedback.component';
import {AppScreen, UiService} from './services/ui.service';
import {Subscription} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    FeedbacksComponent,
    AddFeedbackComponent,
    NgIf,
  ],
  providers: [UiService],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private uiService: UiService) {
  }

  title = 'FeedbackSpa';
  currentScreen: AppScreen = AppScreen.feedbacks
  private subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.currentScreen = value))
  }

  addSender() {
    this.uiService.toggleScreen(AppScreen.addSender)
  }

  sendFeedback() {
    this.uiService.toggleScreen(AppScreen.sendFeedback)
  }

  protected readonly AppScreen = AppScreen;
}
