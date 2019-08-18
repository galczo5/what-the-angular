import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [TopNavigationComponent],
  exports: [
    TopNavigationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
