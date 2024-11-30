import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    standalone: true,
    styleUrl: './button.component.css'
})
export class ButtonComponent {
    @Input() text: string = "Button";
}
