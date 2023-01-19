import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaningPageRoutingModule } from './planing-routing.module';

import { PlaningPage } from './planing.page';
import { AddPlaningPage } from '../add-planing/add-planing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaningPageRoutingModule,
    

  ],
  declarations: [PlaningPage]
})
export class PlaningPageModule {}
