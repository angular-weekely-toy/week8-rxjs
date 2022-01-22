import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  public normalObservable: string[] = [];
  public filterOperator: string[] = [];
  constructor() { }
  ngOnInit(): void {
  }

  createNormalObservable(): void {
    // create
    const observable = new Observable(subscriber => {
      subscriber.next('Hello');
      subscriber.next('World');
      subscriber.complete();
    });
    // const observable = Observable.create(subscriber => {
    //   subscriber.next('Hello');
    //   subscriber.next('World');
    //   subscriber.complete();
    // });


    const observer = {
      next: value => this.normalObservable.push(value),
      error: err => console.error(err),
      complete: () => console.log('Completed')
    };
    const subscription = observable.subscribe(observer);
    // const subscription =  observable.subscribe((x: string) => {
    //   this.normalObservable.push(x);
    // });
    subscription.unsubscribe();
  }

  createFilterOperator(): void {
    const observable = new Observable<string>(subscriber => {
      subscriber.next('k-Hello');
      subscriber.next('y-World');
      subscriber.next('k-Good');
      subscriber.next('y-Job');
      subscriber.complete();
    });
    observable.pipe(
      filter(it => it.startsWith('k'))
    ).subscribe(v => this.filterOperator.push(v));
  }
}
