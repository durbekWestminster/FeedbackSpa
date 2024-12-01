import {Component, OnInit} from '@angular/core';
import {Feedback} from '../../interfaces/feedback';
import {FeedbackService} from '../../services/feedback.service';
import {NgForOf} from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  standalone: true,
  imports: [
    NgForOf,
  ],
  styleUrl: './feedbacks.component.css',
})
export class FeedbacksComponent implements OnInit {
  constructor(private feedbackService: FeedbackService) {}

  subscription: Subscription

  feedbacks: Feedback[]

  deleteFeedback(id: number) {
    this.feedbackService.deleteFeedback(id)
  }

  ngOnInit(): void {
    this.fetchFeedbacks()
    this.feedbackService.fetchFeedbacks()
  }
  
  fetchFeedbacks() {
    this.subscription = this.feedbackService.listenToFeedbackChanges().subscribe((value) => {
      this.feedbacks = value
      console.log(`qwe got feedbacks ${value}`)
    })
  }
}
