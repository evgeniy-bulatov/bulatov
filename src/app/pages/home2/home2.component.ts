import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home2Component {
  items = [
    '15 минут',
    '30 минут',
    '45 минут',
    '1 час 00 минут',
    '1 час 15 минут',
    '1 час 45 минут',
    '2 чаа 00 минут',
    '2 час 15 минут',
    '2 час 30 минут',
    '2 час 45 минут',
    '3 час 00 минут',
  ];

  testValue = new FormControl();
}

