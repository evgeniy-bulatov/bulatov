import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  TuiCheckboxLabeledModule, TuiElasticContainerModule,
  TuiInputModule,
  TuiIslandModule,
  TuiRadioBlockModule,
  TuiTextAreaModule
} from '@taiga-ui/kit';
import { Home1RoutingModule } from './home1-routing.module';
import { Home1Component } from './home1.component';
import {
    TuiButtonModule,
    TuiGroupModule,
    TuiHintModule, TuiHostedDropdownModule, TuiLinkModule, TuiRootModule,
    TuiSvgModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {TuiPaletteModule} from "@taiga-ui/addon-editor";


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
        TuiTextAreaModule,
        TuiIslandModule,
        TuiCheckboxLabeledModule,
        FormsModule,
        TuiElasticContainerModule,
        TuiRootModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiPaletteModule,
    ]
})
export class Home1Module { }
