import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';
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
  // testForm = new FormGroup({
  // testValue1: new FormControl(false),
  // testValue2: new FormControl(false),
  // testValue3: new FormControl(false),
  // testValue4: new FormControl(false),
  // testValue5: new FormControl(false),
  // testValue6: new FormControl(false),
  // testValue7: new FormControl(false),
  // });


  itemControl = new FormControl();
    readonly testForm = new FormGroup({
      testValue1: new FormControl(new TuiTime(8, 30)),
      testValue2: new FormControl(new TuiTime(8, 30)),
      testValue3: new FormControl(new TuiTime(8, 30)),
      testValue4: new FormControl(new TuiTime(8, 30)),
      testValue5: new FormControl(new TuiTime(8, 30)),
      testValue6: new FormControl(new TuiTime(8, 30)),
      testValue7: new FormControl(new TuiTime(8, 30)),
    });

  readonly items = tuiCreateTimePeriods(8, 17, [0, 30]);
}


