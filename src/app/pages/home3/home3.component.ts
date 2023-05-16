import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';


import {BehaviorSubject} from 'rxjs';

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
    testValue4: new FormControl({value: false, disabled: true}),
    testValue5: new FormControl(false),
    testValue6: new FormControl(false),
    testValue7: new FormControl(false),

  });
  readonly test1Form = new FormGroup({
    testValue1: new FormControl(new TuiTime(8, 0 )),
    testValue2: new FormControl(new TuiTime(17, 0 )),
  });

  readonly items = tuiCreateTimePeriods(8, 17, [0, 30]);
}
