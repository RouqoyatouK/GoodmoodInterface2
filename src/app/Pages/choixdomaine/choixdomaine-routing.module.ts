import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixdomainePage } from './choixdomaine.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixdomainePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixdomainePageRoutingModule {}
