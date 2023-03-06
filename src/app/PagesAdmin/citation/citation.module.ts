import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitationPageRoutingModule } from './citation-routing.module';

import { CitationPage } from './citation.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitationPageRoutingModule,
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
  declarations: [CitationPage]
})
export class CitationPageModule {}
