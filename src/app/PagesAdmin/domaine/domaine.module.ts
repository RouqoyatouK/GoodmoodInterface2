import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DomainePageRoutingModule } from './domaine-routing.module';

import { DomainePage } from './domaine.page';
import { NgxPaginationModule } from 'ngx-pagination';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DomainePageRoutingModule,
    NgxPaginationModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      units: " Point",
      showSubtitle: false,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
  ],
  declarations: [DomainePage]
})
export class DomainePageModule {}
