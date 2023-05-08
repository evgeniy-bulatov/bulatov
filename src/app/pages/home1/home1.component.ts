import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
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
    ['red', 'var(--tui-error-fill)'],
    ['green', 'var(--tui-success-fill)'],
    ['blue', 'var(--tui-info-fill)'],
  ]);

  color$ = new BehaviorSubject('var(--tui-success-fill)');

  updateColor(color: string): void {
    this.color$.next(color);
  }
}
