import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiDay} from "@taiga-ui/cdk";
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent {
  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
  ) {}


  value: TuiDay | null = null;

  onDayClick(day: TuiDay): void {
    this.value = day;
  }

  readonly testForm = new FormGroup({
    testValue: new FormControl('Предстоящие'),
  });
  readonly days = ['Прошедшие', 'Предстоящие', 'Отменённые'];
}






