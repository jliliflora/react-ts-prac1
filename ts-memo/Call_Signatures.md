# Call Signatures
### Call Signatures란?

→ 함수위에 마우스를 올렸을 때 보게 되는 것을 말한다!

**→ 프로그램을 디자인하면서 타입을 먼저 생각하고 코드를 구현할 수 있게한다**

<br>
<br>

- 코드를 구현하면서 같이 타입선언까지 해주어야했던 과정을 **분리해서 구현할 수 있다**
```
//call signature
//직접 타입을 선언해주면서, 우리가 TS에게 이 함수가 어떻게 호출되는지 설명해주는 부분!
type Add = (a:number, b:number) => number; 
					 //파라미터타입        //함수의 리턴타입

const add:Add = (a ,b) => a + b
```