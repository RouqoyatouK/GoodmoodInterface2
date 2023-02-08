import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueiladminPageRoutingModule } from './accueiladmin-routing.module';

import { AccueiladminPage } from './accueiladmin.page';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueiladminPageRoutingModule,
    NgChartsModule
  ],
  declarations: [AccueiladminPage]
})
export class AccueiladminPageModule {}
