import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: `demo`,
        pathMatch: 'full',
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('./modules/demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
