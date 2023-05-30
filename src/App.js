import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

//tag name(h1, span, p...등등)에 의존하고 싶지 않을때
const Emoji = styled.span`
  font-size: 40px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: fles;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  // 부모 컴포넌트에 의해서 자식 컴포넌트가 style을 갖는 법
  // span {
  //   font-sixe: 40px;
  //   &:hover {
  //     font-size: 60px;
  //   }
  //   &:active {
  //     opacity: 0;
  //   }
  // }
  ${Emoji}:hover {
    font-size: 60px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🥰</span>
        <Emoji as="p">😜</Emoji>
      </Box>
      <Emoji as="p">😜</Emoji>
    </Wrapper>
  );
}

export default App;
