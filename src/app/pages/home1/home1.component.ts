import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

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


}

