import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { SearchPageComponent } from './containers/search-page/search-page.component';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
