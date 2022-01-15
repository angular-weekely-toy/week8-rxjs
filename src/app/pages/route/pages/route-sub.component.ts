import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-main',
  template: `
    <h2>{{title}} {{id}}</h2>

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
  title = 'default title';
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.router.events.subscribe(it => {
      console.log('----router event-->', it);
    });
    // this.route.snapshot.paramMap
    this.route.data.subscribe(it => {
      console.log('title-->---', it.title);
      this.title = it.title;
    });
    this.route.paramMap.subscribe(params => {
      console.log('---', params.get('id'));
    });
    console.log(this.route.snapshot.paramMap.get('id'));
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
  }

}
