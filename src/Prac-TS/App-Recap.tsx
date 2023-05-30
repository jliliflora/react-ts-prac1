import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

// props 타입선언해주깅
interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  //SyntheticEvent라고 리액트 내에 모든 이벤트들을 보여주는 가이드가 있음
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};

  return (
    <Container>
      <H1>Protected</H1>
      <Dummy active text="hello" />
      <form>
        <button onClick={onClick}>click me</button>
      </form>
    </Container>
  );
} //active와 active={true} 같은 뜻임

export default App;
