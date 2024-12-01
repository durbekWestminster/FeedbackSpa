import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {Feedback} from '../interfaces/feedback';
import {Sender} from '../interfaces/sender';
import { CreateSenderRequest } from '../interfaces/create_sender_request';
import { SendFeedbackRequest } from '../interfaces/send_feedback_request';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = 'https://localhost:7147/api';

  constructor(private http: HttpClient) {}

  private feedbackSubject = new Subject<Feedback[]>()

  fetchFeedbacks() {
    var _feedbacks = this.http.get<Feedback[]>(this.apiUrl + "/Feedback");
    _feedbacks.subscribe((value) => {
      this.feedbackSubject.next(value);
    });
  }

  listenToFeedbackChanges(): Observable<Feedback[]> {
    return this.feedbackSubject.asObservable()
  }

  sendFeedback(request: SendFeedbackRequest) {
    this.http.post(this.apiUrl + `/Feedback`, request).subscribe((value) => {
      this.fetchFeedbacks()
    })
  }

  deleteFeedback(id: number) {
    this.http.delete(this.apiUrl + `/Feedback/${id}`).subscribe((value) => (this.fetchFeedbacks()))
  }

  getSenders(): Observable<Sender[]> {
    var _senders = this.http.get<Sender[]>(this.apiUrl + "/Sender");
    return _senders
  }

  createSender(request: CreateSenderRequest) {
    this.http.post(this.apiUrl + "/Sender", request).subscribe()
  }
}
