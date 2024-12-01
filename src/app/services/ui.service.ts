import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private currentScreen: AppScreen = AppScreen.feedbacks

  private subject = new Subject<AppScreen>()

  toggleScreen(screen: AppScreen) {
    this.subject.next(screen)
  }

  onToggle(): Observable<AppScreen> {
    return this.subject.asObservable()
  }
}

export enum AppScreen {
  feedbacks,
  sendFeedback,
  addSender
}
