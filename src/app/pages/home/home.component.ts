import {ChangeDetectionStrategy, Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent {
  breakpoints = [
    'tui-mobile',
    'tui-mobile-min',
    'tui-mobile-interval',
    'tui-tablet',
    'tui-tablet-min',
    'tui-tablet-interval',
    'tui-desktop',
    'tui-desktop-min',
    'tui-desktop-interval',
    'tui-desktop-lg-min',
    '1234567',
  ] as const;
}












