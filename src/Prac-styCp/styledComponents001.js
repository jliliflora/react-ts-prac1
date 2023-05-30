import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
// 모두 다 같은 attribute를 가져야 할때 => .attrs()
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function styCp001() {
  return (
    <Father as="header">
      <Btn>Log In</Btn>
      <Btn as="a" href="/">
        Log In
      </Btn>
      <Input />
      <Input />
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}
//as : 링크로써 사용하고 싶다고 명시할 수 있는 props, 컴포넌트가 렌더링 되는 방식을 바꿔주는거임!!

export default styCp001;
