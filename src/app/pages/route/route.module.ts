import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './route-routing.module';
import {RouteMainComponent} from './pages/route-main.component';
import {RouteSubComponent} from './pages/route-sub.component';
import {RouteNotfoundComponent} from './pages/route-notfound.component';
import {RouteSub2Component} from './pages/route-sub2.component';
import {RouteSub1Component} from './pages/route-sub1.component';



@NgModule({
  declarations: [RouteMainComponent, RouteSubComponent, RouteNotfoundComponent, RouteSub1Component, RouteSub2Component],
  imports: [
    CommonModule,
    routing
  ]
})
export class RouteModule { }
