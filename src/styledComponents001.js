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
//as : 링크로써 사용하고 싶다고 명시할 수 있는 props

export default styCp001;
