import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route-main',
  template: `
    <h2>sub {{id}}</h2>

    <nav>
      <ul>
        <li><a routerLink="child-a">Child A</a></li>
        <li><a routerLink="child-b">Child B</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class RouteSubComponent implements OnInit {
  id = '';
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('---', params.get('id'));
    });
    console.log(this.route.snapshot.paramMap.get('id'));
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
  }

}
