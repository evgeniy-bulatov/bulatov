import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent {
  readonly items = ['Email', 'Телефон'];
  type = this.items[0];
  readonly group = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });
  readonly validator = Validators.email;



  testForm = new FormGroup({
    testValue: new FormControl('password', Validators.required),
  });
  readonly test1Form = new FormGroup({
    testValue: new FormControl('', Validators.minLength(12)),
  });
  readonly countries = Object.values(TuiCountryIsoCode);
  countryIsoCode = TuiCountryIsoCode.RU;
}
