import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaningPage } from './planing.page';

const routes: Routes = [
  {
    path: '',
    component: PlaningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaningPageRoutingModule {}
