import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';



@NgModule({
  declarations: [LeftSidebarComponent],
  exports: [
    LeftSidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SidebarModule { }
