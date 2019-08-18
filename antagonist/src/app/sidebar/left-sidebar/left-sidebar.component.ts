import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html'
})
export class LeftSidebarComponent implements OnInit {
  constructor() {
    console.log('constructor', 'component', 'LeftSidebarComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'component', 'LeftSidebarComponent');
  }
}
