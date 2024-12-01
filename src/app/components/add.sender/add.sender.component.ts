import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppScreen, UiService} from '../../services/ui.service';
import {FeedbackService} from '../../services/feedback.service';
import { CreateSenderRequest } from '../../interfaces/create_sender_request';

@Component({
  selector: 'app-addsender',
  imports: [
    FormsModule
  ],
  templateUrl: './add.sender.component.html',
  standalone: true,
  styleUrl: './add.sender.component.css'
})
export class AddSenderComponent {

  constructor(private uiService: UiService, private feedbackService: FeedbackService) {
  }

  sender = {
    name: '',
  };

  submitSender() {
    this.uiService.toggleScreen(AppScreen.feedbacks)
    var createSenderRequest: CreateSenderRequest = {
      name: this.sender.name
    }
    this.feedbackService.createSender(createSenderRequest)
  }

  close() {
    this.uiService.toggleScreen(AppScreen.feedbacks)
  }
}
