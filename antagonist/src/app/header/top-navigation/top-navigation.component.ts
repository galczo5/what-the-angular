import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html'
})
export class TopNavigationComponent implements OnInit {
  constructor() {
    console.log('constructor', 'component', 'TopNavigationComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'component', 'TopNavigationComponent');
  }
}
