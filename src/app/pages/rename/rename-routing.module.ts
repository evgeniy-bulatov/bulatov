import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenameComponent } from './rename.component';

const routes: Routes = [{ path: '', component: RenameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenameRoutingModule { }
