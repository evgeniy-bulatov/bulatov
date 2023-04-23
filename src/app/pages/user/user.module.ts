import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {TuiButtonModule, TuiHintModule, TuiSvgModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import {
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule,
  TuiInputModule,
  TuiInputPasswordModule, TuiStringifyContentPipeModule,
  TuiTextAreaModule
} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiTextAreaModule,
    TuiInputModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiHintModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule
  ]
})
export class UserModule { }
