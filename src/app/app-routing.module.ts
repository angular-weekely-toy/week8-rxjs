import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoPageComponent} from './pages/todo/todo.page.component';
import {HomePageComponent} from './pages/home/home.page.component';
import {BookSearchPageComponent} from './pages/book-search/book-search.page.component';
import {CalendarPageComponent} from './pages/calendar/calendar.page.component';
import {CatSearchPageComponent} from './pages/cat-search/cat-search.page.component';
import {EmojiComponent} from './pages/emoji/emoji.component';
import {DirectivesComponent} from './pages/directives/directives.component';
import {RouteModule} from './pages/route/route.module';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'todo', component: TodoPageComponent},
  {path: 'book-search', component: BookSearchPageComponent},
  {path: 'calendar', component: CalendarPageComponent},
  {path: 'cat-search', component: CatSearchPageComponent},
  {path: 'emoji', component: EmojiComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'route', loadChildren: () => import('./pages/route/route.module').then(m => m.RouteModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true} // <-- 디버그 활성화
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
