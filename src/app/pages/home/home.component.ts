import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';


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

  onClick(result: string): void {
    this.alerts.open(result).subscribe();
  }
}










