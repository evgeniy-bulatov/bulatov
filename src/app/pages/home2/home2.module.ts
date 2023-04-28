import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2.component';
import {TuiHintModule, TuiSvgModule, TuiTextfieldControllerModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    Home2Component
  ],
  imports: [
    CommonModule,
    Home2RoutingModule,

    TuiTextfieldControllerModule,
    TuiSvgModule,
    TuiHintModule,
  ]
})
export class Home2Module { }
