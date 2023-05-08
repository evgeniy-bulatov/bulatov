import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
    readonly control = new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ])
  readonly items = [
    {name: 'John', surname: 'Cleese'},
  ];

  readonly stringify = (item: {name: string; surname: string}): string =>
    `${item.name} ${item.surname}`;

    testForm = new FormGroup({
      testValue: new FormControl('', Validators.required),
    })
}






