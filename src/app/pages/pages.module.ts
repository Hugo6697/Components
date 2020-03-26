import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { HijoComponent } from '../components/hijo/hijo.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
  HomeComponent,
  HijoComponent
  ]
})
export class PagesModule { }
