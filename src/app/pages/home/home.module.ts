import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiActionModule} from '@taiga-ui/kit';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
    TuiCalendarRangeModule,
    TuiInputFilesModule,
    TuiIslandModule,
    TuiMarkerIconModule,
    TuiTagModule
} from "@taiga-ui/kit";
import {TuiButtonModule, TuiNotificationModule, TuiRootModule} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        TuiActionModule,
        TuiTableModule,
        CommonModule,
        HomeRoutingModule,
        TuiCalendarRangeModule,
        TuiIslandModule,
        TuiRootModule,
        TuiNotificationModule,
        TuiTagModule,
        TuiButtonModule,
        TuiInputFilesModule,
        ReactiveFormsModule,
        TuiMarkerIconModule
    ]
})
export class HomeModule { }
