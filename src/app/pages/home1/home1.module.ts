import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule, TuiRadioBlockModule} from '@taiga-ui/kit';
import { Home1RoutingModule } from './home1-routing.module';
import { Home1Component } from './home1.component';
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiHintModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";


@NgModule({
  declarations: [
    Home1Component
  ],
  imports: [
    CommonModule,
    Home1RoutingModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiHintModule,
    TuiSvgModule,
    TuiRadioBlockModule,
    TuiGroupModule,
  ]
})
export class Home1Module { }
