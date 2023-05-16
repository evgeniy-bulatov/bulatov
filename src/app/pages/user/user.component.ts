import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiAlertService} from "@taiga-ui/core";

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
  readonly stringify = (item: { name: string; surname: string }): string =>
    `${item.name} ${item.surname}`;
  testForm = new FormGroup({
    testValue: new FormControl('', Validators.required),
  })


  exampleForm = new FormGroup({
    exampleControl: new FormControl(''),
  });
  open = false;
  showDialog(): void {
    this.open = true;
  }
  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {
  }
  showNotification(): void {
    this.alerts
      .open('<strong>пароль сгенерирован и отправлен на ваш email</strong>', {label: 'Успешно!'})
      .subscribe();
  }
}






