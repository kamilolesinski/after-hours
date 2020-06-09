import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit',
  styleUrls: ['./submit.component.scss'],
  templateUrl: './submit.component.html'
})
export class SubmitComponent {
  @Input() readonly content = 'Sign in'
  @Input() readonly status = 'INVALID'
}
