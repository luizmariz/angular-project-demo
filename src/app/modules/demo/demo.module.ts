import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { SearchPageComponent } from './containers/search-page/search-page.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [SearchPageComponent, SearchbarComponent],
  imports: [CommonModule, DemoRoutingModule],
})
export class DemoModule {}
