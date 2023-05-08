import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotesComponent } from './rotes.component';

const routes: Routes = [{ path: '', component: RotesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotesRoutingModule { }
