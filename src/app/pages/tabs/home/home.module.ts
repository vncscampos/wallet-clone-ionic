import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

register();

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
    ],
    declarations: [HomePage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
