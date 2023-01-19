import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlaningPageRoutingModule } from './add-planing-routing.module';

import { AddPlaningPage } from './add-planing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlaningPageRoutingModule
  ],
  declarations: [AddPlaningPage]
})
export class AddPlaningPageModule {}
