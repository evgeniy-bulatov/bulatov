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

  readonly form = new FormGroup({
    control: new FormControl([]),
  });

  open = false;

  readonly items = ['15мин', '30мин', '45мин','1ч 15мин', '1ч 30min', '1ч 45мин','2часа'];

  readonly arrow = TUI_ARROW;

  private get value(): readonly string[] {
    return this.form.get('control')?.value || [];
  }

  get appearance(): string {
    return this.length ? 'whiteblock-active' : 'whiteblock';
  }

  get length(): number {
    return this.value.length || 0;
  }

  get text(): string {
    switch (this.length) {
      case 0:
        return 'Длительность';
      case 1:
        return this.value[0];
      default:
        return `${this.length} selected`;
    }
  }
}
