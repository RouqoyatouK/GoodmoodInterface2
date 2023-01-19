import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrerPage } from './entrer.page';

const routes: Routes = [
  {
    path: '',
    component: EntrerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrerPageRoutingModule {}
