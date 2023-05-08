import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotesRoutingModule } from './rotes-routing.module';
import { RotesComponent } from './rotes.component';


@NgModule({
  declarations: [
    RotesComponent
  ],
  imports: [
    CommonModule,
    RotesRoutingModule
  ]
})
export class RotesModule { }
