import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddnewRoutingModule } from './addnew-routing.module';
import { AddnewComponent } from './addnew.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputDateTimeModule, TuiTextAreaModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    AddnewComponent
  ],
  imports: [
    CommonModule,
    AddnewRoutingModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiInputDateTimeModule
  ]
})
export class AddnewModule { }
