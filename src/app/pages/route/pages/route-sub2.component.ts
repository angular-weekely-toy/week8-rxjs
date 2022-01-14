import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route-main',
  template: '<div>sub 2</div>',
})
export class RouteSub2Component implements OnInit {
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
  }

}
