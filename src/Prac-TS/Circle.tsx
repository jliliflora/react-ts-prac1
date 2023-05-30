import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  bdColor: string;
} //styled-components의 인터페이스

// styled-component
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.bdColor};
`;

// object shape(객체 모양)을 TS에게 설명하기 위해 interface 만들어주기
interface CircleProps {
  bgColor: string;
  borderColor?: string; //optional
  text?: string; //자바스크립트로 optional 주기
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} bdColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
} // borderColor ?? bgColor => borderColor가 Optional이라서 타입이 undefined일 경우의 디폴트 값을 설정해주어야함

export default Circle;
