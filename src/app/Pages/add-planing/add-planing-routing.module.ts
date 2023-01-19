import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlaningPage } from './add-planing.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlaningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlaningPageRoutingModule {}
