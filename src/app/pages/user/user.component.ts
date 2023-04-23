import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
    readonly control = new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ])
}

