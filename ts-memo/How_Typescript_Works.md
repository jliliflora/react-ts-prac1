# How Typescript Works
정신나간 코드를 보면 컴파일조차 안해주는게 타입스크립트

<h3>🔻 정신나간 코드 내뱉는 예시</h3>
<br>

```
const sy = {
    nickname: "seung"
}

sy.hello();
```

### Errors in code

> Property 'hello' does not exist on type '{ nickname: string; }'.

<br>
<br>

```
[1, 2, 3, 4] + false
```
### Errors in code

> Operator '+' cannot be applied to types 'number[]' and 'boolean'.


<br>
<br>

```
function divide(a, b) {
    return a / b
}

divide("hello");
```
### Errors in code

> Parameter 'a' implicitly has an 'any' type.
> 

> Parameter 'b' implicitly has an 'any' type.
> 

> Expected 2 arguments, but got 1.

<br>
<br>

```
const player = {
    age:12
}

play.age = false
```
### Errors in code

> Cannot find name 'play'.
