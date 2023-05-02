import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home3RoutingModule } from './home3-routing.module';
import { Home3Component } from './home3.component';
import {TuiCheckboxBlockModule, TuiDataListWrapperModule, TuiInputTimeModule, TuiSelectModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule, TuiGroupModule, TuiRootModule, TuiTextfieldControllerModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    Home3Component
  ],
  imports: [
    CommonModule,
    Home3RoutingModule,
    TuiCheckboxBlockModule,
    ReactiveFormsModule,
    TuiGroupModule,
    TuiButtonModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiRootModule,
    TuiInputTimeModule,
    TuiTextfieldControllerModule
  ]
})
export class Home3Module { }
