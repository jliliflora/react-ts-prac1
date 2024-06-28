# Class
```
class Player {
    constructor (
        private firstName: string,
        private lastName: string,
        public  nickName: string
    ) {}
}
//private, public은 자바스크립트 상에서는 보이지 않음! 중요중요중

const nico = new Player("nico", "las", "니꼬")
nico.firstName
```
### Errors in code

> Property 'firstName' is private and only accessible within class 'Player'.

<br>
firstName은 private이기 때문에 타입스크립트 상에서는 작동하지 않지만
자바스크립트에선 문제없이 컴파일이 되어버린다.

이렇게 TS에 보호기능(?)이 있다는건 갱장히 멋지고 똑똑한 기능이얌