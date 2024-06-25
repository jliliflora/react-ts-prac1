# Type Alias
타입 앨리어스는 새로운 타입을 정의한다. 

타입으로 사용할 수 있다는 점에서 타입 앨리어스는 인터페이스와 유사하다.

<br>

- <h4>변수에 type 할당하는 방법</h4>
```
// 타입 앨리어스
type Player {
	name:string,
	age?:number //선택적 타입 -> number이거나 undefined가 된
}

const nico : Player = {
	name:"nico"
}

const lynn : Player = {
	name:"lynn",
	age:12
}
```

이렇게도 선언 가능함!
```
type Age = number;
type Name = string;

// 타입 앨리어스
type Player {
	name:Name,
	age?:Age
}
```
그러나 이런 과한 재사용은 권장하지 않음~!

<br>

- <h4>함수의 return값의 type을 지정하는 방법</h4>
```
type Age = number;
type Name = string;

// 타입 앨리어스
type Player {
	name:Name,
	age?:Age
}

function playerMaker(name:string) : Player { //argument에 타입 지정, 함수 return값에 타입 지정
    return {
        name
    }
} 
const nico = playerMaker("nico");
nico.age = 12
```

<br>

- <h4>화살표 함수에 타입지정하는 방법</h4>
```
type Age = number;
type Name = string;

// 타입 앨리어스
type Player {
	name:Name,
	age?:Age
}

//화살표 함수
const playerMaker = (name:string) : Player => ({name})
const nico = playerMaker("nico");
nico.age = 12
```