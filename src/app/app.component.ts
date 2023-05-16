import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TUI_ARROW} from '@taiga-ui/kit';


import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'planner';
  avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
  readonly arrow = TUI_ARROW;
  constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}
  readonly control = new FormControl([], [maxFilesLength(5)]);
  rejectedFiles: readonly TuiFileLike[] = [];
  ngOnInit(): void {
    this.control.statusChanges.subscribe(response => {
      console.info('STATUS', response);
      console.info('ERRORS', this.control.errors, '\n');
    });
  }
  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }
  removeFile({name}: File): void {
    this.control.setValue(
      this.control.value?.filter((current: File) => current.name !== name) ?? [],
    );
  }
  clearRejected({name}: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      rejected => rejected.name !== name,
    );
  }
}
export function maxFilesLength(maxLength: number): ValidatorFn {
  return ({value}: AbstractControl) => {
    return value.length > maxLength
      ? {
        maxLength: new TuiValidationError(
          'Error: maximum limit - 5 files for upload',
        ),
      }
      : null;
  };




}
