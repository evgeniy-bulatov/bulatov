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
  itemControl = new FormControl();
  itemBeforeControl = new FormControl();
  itemAfterControl = new FormControl();
  items = [
    '1 час 00 минут',
    '1 час 15 минут',
    '1 час 45 минут',
    '2 часа 00 минут',
    '2 часа 15 минут',
    '2 часа 30 минут',
    '2 часа 45 минут',
    '3 часа 00 минут',
  ];
  beforeItems = [
    '5 минут',
    '10 минут',
    '15 минут',
    '20 минут',
    '25 минут',
    '30 минут',
  ];

  afterItems = [
    '5 минут',
    '10 минут',
    '15 минут',
    '20 минут',
    '25 минут',
    '30 минут',
  ];

  testValue = new FormControl();

  testForm = new FormGroup({
    testValue1: new FormControl(false),
    testValue2: new FormControl(false),
  });
}
