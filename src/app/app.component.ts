import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class AppComponent {
  title = 'planner';

}
