import {Component, OnInit} from '@angular/core';
import {Feedback} from '../../interfaces/feedback';
import {FeedbackService} from '../../services/feedback.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  standalone: true,
  imports: [
    NgForOf,
  ],
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent implements OnInit {
  constructor(private feedbackService: FeedbackService) {}

  feedbacks: Feedback[]

  deleteFeedback(id: number) {

  }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe({
      next: (data) => (this.feedbacks = data),
      error: (err) => console.error('Error fetching feedbacks', err)
    });
  }
}
