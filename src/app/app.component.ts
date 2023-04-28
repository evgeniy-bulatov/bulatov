import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'planner';
  avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
  readonly arrow = TUI_ARROW;
  constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}
}




