import styled from 'styled-components';

const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  color: #fff;
  width: 100px;
  height: 30px;
  background-color: teal;
  border: 0;
  border-radius: 15px;
  text-align: center;
`;

// attrs - 태그에 속성 값을 설정
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: lightgray;
`;

function AsAndAttrs() {
  return (
    <Father as="header">
      <Btn>Log In</Btn>
      {/* Btn 컴포넌트는 그대로 사용하고 싶고 HTML 태그만 변경하고 싶을때 as 를 사용한다. */}
      <Btn as="a" href="/">Log In</Btn><br />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default AsAndAttrs;
