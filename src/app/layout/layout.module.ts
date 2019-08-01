import { CommonModule } from '@angular/common';
import { FutterComponent } from './futter/futter.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HeaderComponent, FutterComponent],
  imports: [
    CommonModule,

  ]
})
export class LayoutModule { }
