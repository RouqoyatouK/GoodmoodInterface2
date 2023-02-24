import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashimagePageRoutingModule } from './splashimage-routing.module';

import { SplashimagePage } from './splashimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashimagePageRoutingModule
  ],
  declarations: [SplashimagePage]
})
export class SplashimagePageModule {}
