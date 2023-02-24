import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashimagePage } from './splashimage.page';

const routes: Routes = [
  {
    path: '',
    component: SplashimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashimagePageRoutingModule {}
