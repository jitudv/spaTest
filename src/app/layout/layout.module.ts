import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FutterComponent } from './futter/futter.component';

@NgModule({
  declarations: [HeaderComponent, FutterComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
