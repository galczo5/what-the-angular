import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked{
  constructor() {
    console.log('constructor', 'component', 'AppComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'component', 'AppComponent');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', 'component', 'AppComponent');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', 'component', 'AppComponent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', 'component', 'AppComponent');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', 'component', 'AppComponent');
  }
}
