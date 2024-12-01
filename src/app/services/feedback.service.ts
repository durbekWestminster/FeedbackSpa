import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Feedback} from '../interfaces/feedback';
import {Sender} from '../interfaces/sender';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Mock URL

  constructor(private http: HttpClient) {}

  getFeedbacks(): Observable<Feedback[]> {
    return of(this.feedbacks)
    // return this.http.get<Feedback[]>(this.apiUrl);
  }

  getSenders(): Observable<Sender[]> {
    return of(this.senders)
  }

  senders: Sender[] = [
    {
      id: 1,
      name: "Sender1"
    },
    {
      id: 2,
      name: "Sender2"
    },
    {
      id: 3,
      name: "Sender3"
    },
    {
      id: 4,
      name: "Sender4"
    },
    {
      id: 5,
      name: "Sender5"
    }
  ]

  feedbacks: Feedback[] = [
    {
      id: 0,
      title: "feedback1",
      content: "content1",
      sender: {
        id: 1,
        name: "Sender1"
      }
    },
    {
      id: 0,
      title: "feedback1",
      content: "content1",
      sender: {
        id: 1,
        name: "Sender1"
      }
    },
    {
      id: 0,
      title: "feedback1",
      content: "content1",
      sender: {
        id: 1,
        name: "Sender1"
      }
    },
    {
      id: 0,
      title: "feedback1",
      content: "content1",
      sender: {
        id: 1,
        name: "Sender1"
      }
    }
  ]
}
