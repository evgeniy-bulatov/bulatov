import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddnewComponent {
  value: TuiDay | null = null;

  readonly testForm = new FormGroup({
    testValue: new FormControl(null),


  testValue2: new FormControl('comment', Validators.required),
  });
  items2 = tuiCreateTimePeriods(8, 17, [0, 15, 30, 45]);


  onDayClick(day: TuiDay): void {
    this.value = day;
  }


}




