import { Component, Input} from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-validation-message',
  styleUrls: ['./validation-message.component.scss'],
  templateUrl: './validation-message.component.html'
})
export class ValidationMessageComponent {
  @Input() fControl: FormControl = new FormControl()
  @Input() readonly fieldName = ''
}
