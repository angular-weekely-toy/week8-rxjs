import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route-notfound',
  template: '<div>notfound</div>',
})
export class RouteNotfoundComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
  }

}
