import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
  constructor() { }

  ngOnInit() {
  }

}
