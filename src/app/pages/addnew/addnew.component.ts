import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddnewComponent {
  value: TuiDay | null = null;

  onDayClick(day: TuiDay): void {
    this.value = day;
  }

  testForm = new FormGroup({
    testValue1: new FormControl('comment', Validators.required),
    testValue2: new FormControl('comment', Validators.required),
  });
}

