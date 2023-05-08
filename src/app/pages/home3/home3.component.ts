import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';
import {tuiArrayRemove} from '@taiga-ui/cdk';
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiInputTimeOptionsProvider({
      nativePicker: true,
    }),
  ],
})
export class Home3Component {
  testForm = new FormGroup({
    testValue1: new FormControl(false),
    testValue2: new FormControl(false),
    testValue3: new FormControl(false),
    testValue4: new FormControl(false),
    testValue5: new FormControl(false),
    testValue6: new FormControl(false),
    testValue7: new FormControl(false),
  });


readonly test1Form = new FormGroup({
  testValue: new FormControl(null),
});

items1 = tuiCreateTimePeriods();
items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);
}


