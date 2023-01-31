import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DomainePageRoutingModule } from './domaine-routing.module';

import { DomainePage } from './domaine.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DomainePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [DomainePage]
})
export class DomainePageModule {}
