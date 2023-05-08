import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiDataListModule, TuiHostedDropdownModule, TuiSvgModule, TuiErrorModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TuiAvatarModule, TuiFieldErrorPipeModule, TuiInputFilesModule, TuiMarkerIconModule} from "@taiga-ui/kit";
import {TuiFocusableModule} from "@taiga-ui/cdk";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiFocusableModule,
    TuiMarkerIconModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    TuiInputFilesModule,
    ReactiveFormsModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
