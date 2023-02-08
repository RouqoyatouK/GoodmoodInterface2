import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';
import { HomePageModule } from '../Pages/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPageRoutingModule,
    HomePageModule,
    
    
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
