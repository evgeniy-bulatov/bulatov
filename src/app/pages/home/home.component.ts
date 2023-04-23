import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  items = tuiCreateDefaultDayRangePeriods();

}

