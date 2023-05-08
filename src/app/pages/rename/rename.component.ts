import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiTime} from '@taiga-ui/cdk';

@Component({
  selector: 'app-rename',
  templateUrl: './rename.component.html',
  styleUrls: ['./rename.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenameComponent {
  readonly control = new FormControl([]);
}



