import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppScreen, UiService} from '../../services/ui.service';
import {FeedbackService} from '../../services/feedback.service';

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
  }

  close() {
    this.uiService.toggleScreen(AppScreen.feedbacks)
  }
}
