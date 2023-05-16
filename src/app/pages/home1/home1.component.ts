import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {defaultEditorColors} from "@taiga-ui/addon-editor";

import {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
 })
export class Home1Component {
  readonly control = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);
  readonly testForm = new FormGroup({
    testValue: new FormControl('orange'),
  });
  readonly fruits = ['apple', 'orange', 'pineapple'];

  onClick(event: MouseEvent): void {
    console.info('click', event);
  }
  colors = new Map([
    ['green', 'var(--tui-success-fill)'],
    ['blue', 'var(--tui-info-fill)'],
    ['yellow', 'var(--tui-warning-fill)'],
    ['orange', 'var(--tui-support-08)'],
    ['red', 'var(--tui-error-fill)'],
    ['grey', 'var(--tui-base-05)'],
  ]);

  color$ = new BehaviorSubject('var(--tui-base-01)');

  updateColor(color: string): void {
    this.color$.next(color);
  }
}
