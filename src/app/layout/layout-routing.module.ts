import { RouterModule, Routes } from '@angular/router';

import { FutterComponent } from './futter/futter.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'futter', component: FutterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
