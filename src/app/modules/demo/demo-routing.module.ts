import { SearchPageComponent } from './containers/search-page/search-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    component: SearchPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
