import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteMainComponent} from './pages/route-main.component';
import {RouteSubComponent} from './pages/route-sub.component';
import {RouteNotfoundComponent} from './pages/route-notfound.component';
import {UserService} from '../../services/user.service';
import {RouteSub1Component} from './pages/route-sub1.component';
import {RouteSub2Component} from './pages/route-sub2.component';

const routes: Routes = [
  {path: '', component: RouteMainComponent, canActivate: [UserService]},
  {path: 'good',   redirectTo: '55', pathMatch: 'full' },
  {path: ':id', component: RouteSubComponent,
    children: [
      {
        path: 'child-a', // 자식 라우팅 규칙과 연결되는 주소
        component: RouteSub1Component, // 라우터가 렌더링하는 자식 컴포넌트
      },
      {
        path: 'child-b',
        component: RouteSub2Component, // 또다른 자식 컴포넌트
      },
    ]
  },
  {path: '**', component: RouteNotfoundComponent },  // 404
];
export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class RouteRoutingModule { }
