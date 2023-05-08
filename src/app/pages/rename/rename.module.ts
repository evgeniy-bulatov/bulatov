import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenameRoutingModule } from './rename-routing.module';
import { RenameComponent } from './rename.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule, TuiModeModule, TuiRootModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {
  TuiCheckboxLabeledModule, TuiDataListWrapperModule, TuiFilterByInputPipeModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPasswordModule, TuiInputTagModule,
  TuiInputTimeModule, TuiSelectModule, TuiStringifyContentPipeModule
} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    RenameComponent
  ],
  imports: [
    CommonModule,
    RenameRoutingModule,
    ReactiveFormsModule,
    TuiModeModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiInputNumberModule,
    TuiInputTimeModule,
    TuiCheckboxLabeledModule,
    TuiButtonModule,
    TuiRootModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
    TuiInputTagModule,
    TuiTextfieldControllerModule
  ]
})
export class RenameModule { }
