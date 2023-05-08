import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotesRoutingModule } from './rotes-routing.module';
import { RotesComponent } from './rotes.component';
import {TuiButtonModule, TuiRootModule} from "@taiga-ui/core";
import {TuiActionModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    RotesComponent
  ],
  imports: [
    CommonModule,
    RotesRoutingModule,
    TuiRootModule,
    TuiButtonModule,
    TuiActionModule
  ]
})
export class RotesModule { }
