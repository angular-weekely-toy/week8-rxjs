import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route-sub',
  template: '<div>main</div>',
})
export class RouteMainComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
  }

}
