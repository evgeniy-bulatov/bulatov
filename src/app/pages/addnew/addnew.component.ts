import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddnewComponent {

  testForm = new FormGroup({
    testValue1: new FormControl('A field', Validators.required),
    testValue2: new FormControl('This one can be expanded', Validators.required),
  });
}
