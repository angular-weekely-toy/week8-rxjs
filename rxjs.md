# Filter 함수

## filter → 걸러주는 역할 (필터)

```jsx
import { interval } from 'rxjs';

const obs = interval(1000);
obs.subscribe((x) => console.log(x));
```


```jsx
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

const obs = interval(1000)
	.pipe(
	  filter((val) => {
	    return val % 2 == 0;
		})
  )
  .subscribe((x) => console.log(x));
```


```jsx
import { from, of } from 'rxjs'
import { tap, filter } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 }
];

from(products).pipe(
  filter(p => p.price > 2500)
).subscribe(console.log)
```


## skip → 갯수를 통해 스킵

```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 3000, reviews: 0 }
];

from(products).pipe(
  skip(2)
).subscribe(console.log)
```


## skipWhile → condition fn이 처음으로 false일 때까지 skip 그 이후는 무조건 생성

```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 }
];

//condition false가 반환될때까지 skip
from(products).pipe(
  skipWhile(v => v.price < 3000)
).subscribe(console.log)
```


## take → 설정한 만큼 생성 (skip 반대)

```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip,take } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 }
];

from(products).pipe(
  take(3)
).subscribe(console.log)
```


## takeWhile → condition fn이 처음으로 false일 때까지 생성 그 이후는 값을 안가져옴

```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip,take } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 }
];

from(products).pipe(
  takeWhile(v => v.price < 4000)
).subscribe(console.log)
```


## takeLast → 뒤에서 부터 값 가져오기

```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip,take } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 }
];

from(products).pipe(
  takeLast(2)
).subscribe(console.log)
```


## distinct → 중복제거 (ex: 클릭 똑같은거 할경우 막을수있음)

```jsx
from([1, 2, 3, 4, 4, 5]).pipe(
  distinct()
).subscribe(console.log )
```


```jsx
//객체일 경우에는 다른 값이라서 키를 
import { from, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from(products).pipe(
  distinct()
).subscribe(console.log)
```


```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from(products).pipe(
  distinct(v => v.id)
).subscribe(console.log)
```


## reduce → 다수의 값을 하나의 값으로 변경 (총 더하는 값)

```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct, reduce } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from (products)
  .pipe(
    reduce((a, c) => a + c.price, 0)
		//reduce((이전값, 현재순환값)=> 하나의 값으로 변경, 초기값)
  ).subscribe(console.log) // 13000
```

## elementAt: 인덱스의 특정 위치의 값

```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct, reduce, first, elementAt } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from(products)
  .pipe(
    elementAt(2) //index
  ).subscribe(console.log)
```


## first → 첫번째 값 (하나의 값만)

```jsx
import { of } from 'rxjs';
import { first, map } from 'rxjs/operators';

const obs = of(1, 2, 3);
obs.pipe(first())
	.subscribe((val) => {
		console.log(val);
});
```


```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct, reduce, first } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from (products)
  .pipe(
    first()
  ).subscribe(console.log)
```


### 함수 true가 되는 첫번째 값을 받을 수 있다.(옵션:predicate전달)

```jsx
import { from, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct, reduce, first } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from (products)
  .pipe(
    first(v => v.price > 3000)
  ).subscribe(console.log)
```


## find: 처음으로 true가 된 값 (predicate 필수)

```jsx
import { from, of } from 'rxjs'
import { reduce, first, elementAt, find } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from(products)
  .pipe(
    find(v => v.price > 5000)
  ).subscribe(console.log)
```


```jsx
import { from, of } from 'rxjs'
import { reduce, first, elementAt, find } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from(products)
  .pipe(
    find(v => v.price > 3000)
  ).subscribe(console.log)
```


### first vs find 차이점

[predicate] first:  옵션(null) / find: 필수 전달

[값이 없을 경우] first: empty Error / find: undefined

## single → 전체에서 만족하는 하나의 값

전체 스트림이 끝났을 때 특정조건이 모든 요소에 만족이 되는지

[값이 없을 경우 / 여러개있는 경우] error

```jsx
import { from, interval, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct, reduce, first, elementAt, find, single } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 2 },
];

from(products)
  .pipe(
    single(v => v.reviews === 0)
  ).subscribe(console.log)

from(products)
  .pipe(
    single(v => v.reviews == 22)
  ).subscribe(console.log)

from(products)
  .pipe(
    single(v => v.reviews > 1)
  ).subscribe(console.log)
```

## count → 조건의 함수가 참일때 갯수 또는 총 갯수 (옵션: predicate)

```jsx
import { from, interval, of } from 'rxjs'
import { tap, filter, skip, skipWhile, take, takeWhile, takeLast, distinct, reduce, first, elementAt, find, single } from 'rxjs/operators'

const products = [
  { id: "1", name: "note", price: 2000, reviews: 10 },
  { id: "2", name: "clothes", price: 3000, reviews: 10 },
  { id: "3", name: "shoes", price: 4000, reviews: 0 },
  { id: "4", name: "notebook", price: 2000, reviews: 2 },
  // { id: "4", name: "notebook", price: 2000, reviews: 0 },
];

from(products)
   .pipe(
      count()
    ).subscribe(console.log)

from(products)
   .pipe(
      count(v => v.reviews == -1)
    ).subscribe(console.log)
```


하나의 값을 전달하는 것은 complete될때 값이 나옴 (예: reduce, single, count)

→ 무한으로 생성하는 observer 실행이 안됨 (complete를 만들어줘야 사용가능)

```jsx
interval(1000)
  .pipe(
    tap(console.log),
    count() // 실행 안됨
  ).subscribe(console.log)
```


무한으로 생성하는 observer일 경우 complete 만들어서 실행하는 예제

```jsx
interval(1000)
  .pipe(
    tap(console.log),
    take(3),
    count()
  ).subscribe(console.log)
```


## debounceTime → 시간안에서 마지막 값을 기억해서 발생 (자동완성)

```jsx
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

fromEvent(input, 'input')
	.pipe(debounceTime(1000))
  .subscribe((e: InputEvent) => {
	  console.log((<HTMLInputElement>e.target).value);
});
```


## distinctUntilChanged

```jsx
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

fromEvent(input, 'input')
	.pipe(
		debounceTime(1000),
		distinctUntilChanged()
	)
	.subscribe((e: InputEvent) => {
		console.log((<HTMLInputElement>e.target).value);
	});
}
```

```jsx
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

fromEvent(input, 'input')
  .pipe(
    map((e: InputEvent) => (<HTMLInputElement>e.target).value),
    debounceTime(1000),
    distinctUntilChanged()
  )
  .subscribe((val) => {
    console.log(val);
  });
```