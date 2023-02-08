import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidebarPageRoutingModule } from './sidebar-routing.module';

import { SidebarPage } from './sidebar.page';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidebarPageRoutingModule,
    NgChartsModule
  ],
  declarations: [SidebarPage]
})
export class SidebarPageModule {}
