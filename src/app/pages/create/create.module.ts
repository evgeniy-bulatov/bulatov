import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiInputPhoneModule,
    TuiSelectModule
} from "@taiga-ui/kit";
import {TuiValidatorModule} from "@taiga-ui/cdk";
import {TuiButtonModule, TuiRootModule, TuiTextfieldControllerModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiDataListWrapperModule,
    TuiInputPhoneModule,
    TuiSelectModule,
    FormsModule,
    TuiValidatorModule,
    TuiRootModule,
    TuiButtonModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule
  ]
})
export class CreateModule { }
