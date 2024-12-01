import {Component, OnInit} from '@angular/core';
import {AppScreen, UiService} from '../../services/ui.service';
import {Sender} from '../../interfaces/sender';
import {FeedbackService} from '../../services/feedback.service';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-addfeedback',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './add.feedback.component.html',
  standalone: true,
  styleUrl: './add.feedback.component.css'
})
export class AddFeedbackComponent implements OnInit {
  constructor(private uiService: UiService, private feedbackService: FeedbackService) {
  }

  senders: Sender[]
  feedback = {
    title: '',
    content: '',
    sender: null
  };

  ngOnInit(): void {
    this.feedbackService.getSenders().subscribe((value) => (this.senders = value))
  }

  close() {
    this.uiService.toggleScreen(AppScreen.feedbacks)
  }

  submitFeedback() {
    this.uiService.toggleScreen(AppScreen.feedbacks)
  }
}
