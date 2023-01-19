import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixdomainePageRoutingModule } from './choixdomaine-routing.module';

import { ChoixdomainePage } from './choixdomaine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixdomainePageRoutingModule
  ],
  declarations: [ChoixdomainePage]
})
export class ChoixdomainePageModule {}
