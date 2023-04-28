import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2.component';
import {
  TuiButtonModule, TuiDropdownModule,
  TuiHintModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiDataListWrapperModule, TuiMultiSelectModule} from "@taiga-ui/kit";
import {TuiPreventDefaultModule} from "@taiga-ui/cdk";


@NgModule({
  declarations: [
    Home2Component
  ],
  imports: [
    CommonModule,
    Home2RoutingModule,
    TuiHostedDropdownModule,

    TuiTextfieldControllerModule,
    TuiSvgModule,
    TuiHintModule,
    ReactiveFormsModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
    TuiPreventDefaultModule,
    TuiDropdownModule,
  ]
})
export class Home2Module { }
