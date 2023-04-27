import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiTableModule} from '@taiga-ui/addon-table';



import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TuiCalendarRangeModule, TuiIslandModule, TuiTagModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiNotificationModule, TuiRootModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    TuiTableModule,
    CommonModule,
    HomeRoutingModule,
    TuiCalendarRangeModule,
    TuiIslandModule,
    TuiRootModule,
    TuiNotificationModule,
    TuiTagModule,
    TuiButtonModule
  ]
})
export class HomeModule { }
