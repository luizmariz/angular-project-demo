import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonModule, DialogModule, ClickOutsideModule } from '../../shared';

import { SearchPageComponent } from './containers/search-page/search-page.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

import { ResultPanelComponent } from './components/result-panel/result-panel.component';
import { ResultPanelItemComponent } from './components/result-panel-item/result-panel-item.component';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchbarComponent,

    ResultPanelComponent,
    ResultPanelItemComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    ClickOutsideModule,
  ],
})
export class DemoModule {}
