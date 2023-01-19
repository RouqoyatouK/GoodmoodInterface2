import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrerPageRoutingModule } from './entrer-routing.module';

import { EntrerPage } from './entrer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrerPageRoutingModule
  ],
  declarations: [EntrerPage]
})
export class EntrerPageModule {}
