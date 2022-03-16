import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor || 'red'};
  // background-color를 props에 따라 바귀도록 한다.
  // props가 넘어오지 않으면 background-color는 red가 된다.
  width: 100px;
  height: 100px;
`;

// 컴포넌트의 확장 - 컴포넌트에 모든 속성을 가져온다.
const Circle = styled(Box)`
  border-radius: 50px;
`;


const Extending = () => {
  return (
    <Father>
      <Box bgColor="blue" />
      <Box />
      <Circle bgColor="skyblue" />
      <Circle />
    </Father>
  )
}

export default Extending