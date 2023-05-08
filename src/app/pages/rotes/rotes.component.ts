import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus'


@Component({
  selector: 'app-rotes',
  templateUrl: './rotes.component.html',
  styleUrls: ['./rotes.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class RotesComponent {
  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        label: 'BASE',
        header,
        size,
      })
      .subscribe();
  }
  on1Click(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        label: 'MIDDLE',
        header,
        size,
      })
      .subscribe();
  }
  on2Click(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        label: 'PROFESSIONAL',
        header,
        size,
      })
      .subscribe();
  }
}
