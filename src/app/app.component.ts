import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  styles: [
    `
            .option {
                white-space: normal;
            }
        `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'planner';
  avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';

  open = false;

  readonly arrow = TUI_ARROW;

  readonly groups = [
    {
      items: [
        'Телефон:+7999-999-99-99',
        'e-mail:tttttttt@gmail.com',
      ],
    },
  ];

  constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}

}




