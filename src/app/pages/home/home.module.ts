import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TuiCalendarRangeModule, TuiIslandModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TuiCalendarRangeModule,
    TuiIslandModule
  ]
})
export class HomeModule { }
