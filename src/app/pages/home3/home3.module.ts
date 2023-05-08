import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home3RoutingModule } from './home3-routing.module';
import { Home3Component } from './home3.component';
import {
  TuiCheckboxBlockModule,
  TuiCheckboxModule,
  TuiDataListWrapperModule, TuiElasticContainerModule, TuiInputModule,
  TuiInputTimeModule,
  TuiSelectModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    TuiButtonModule,
    TuiExpandModule,
    TuiGroupModule,
    TuiRootModule,
    TuiTextfieldControllerModule, TuiTooltipModule
} from "@taiga-ui/core";
import {TuiRepeatTimesModule} from "@taiga-ui/cdk";


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
        TuiTextfieldControllerModule,
        TuiCheckboxModule,
        TuiElasticContainerModule,
        TuiExpandModule,
        TuiInputModule,
        FormsModule,
        TuiRepeatTimesModule,
        TuiTooltipModule
    ]
})
export class Home3Module { }
