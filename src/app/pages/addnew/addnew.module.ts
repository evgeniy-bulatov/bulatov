import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddnewRoutingModule } from './addnew-routing.module';
import { AddnewComponent } from './addnew.component';
import {ReactiveFormsModule} from "@angular/forms";
import {
  TuiDataListWrapperModule,
  TuiInputDateTimeModule,
  TuiInputTimeModule,
  TuiMarkerIconModule,
  TuiTextAreaModule
} from "@taiga-ui/kit";
import {TuiButtonModule, TuiCalendarModule, TuiHostedDropdownModule, TuiRootModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    AddnewComponent
  ],
  imports: [
    CommonModule,
    AddnewRoutingModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiInputDateTimeModule,
    TuiCalendarModule,
    TuiMarkerIconModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiDataListWrapperModule,
    TuiRootModule,
    TuiInputTimeModule
  ]
})
export class AddnewModule { }
