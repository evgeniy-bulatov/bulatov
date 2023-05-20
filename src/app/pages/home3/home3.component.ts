import {ChangeDetectionStrategy, Component, Directive, Inject, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgControl} from '@angular/forms';
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
    testValue2: new FormControl({value: false, disabled: false}),
    testValue3: new FormControl({value: false, disabled: true}),
    testValue4: new FormControl({value: false, disabled: true}),
    testValue5: new FormControl({value: false, disabled: true}),
    testValue6: new FormControl({value: false, disabled: true}),
    testValue7: new FormControl({value: false, disabled: true}),
  });
  readonly items = tuiCreateTimePeriods(8, 17, [0, 30]);

  checked = false;
  disabled = true;



}





