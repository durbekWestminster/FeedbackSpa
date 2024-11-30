import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feedback} from '../interfaces/feedback';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Mock URL

  constructor(private http: HttpClient) {}

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl);
  }
}
