import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`

const Emoji = styled.span`
  font-size: 38px;
  transition: 1s all;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: red;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /* pseudo selector */
  /* Box component 안에서 element 선택 */
  /* span{ */
  /* Box component 안에 Emoji component 선택 */
  ${Emoji} {
    &:hover { /* span:hover{} 와 같다. */
      font-size: 100px;
      transition: 1s all;
    }
  }
`;

const Animation = () => {
  return (
    <Wrapper>
      <Box>
        {/* component 안에 element 도 사용할 수 있다. */}
        {/* <span>🤪</span> */}
        <Emoji>🤪</Emoji>
      </Box>
      {/* hover 적용되지 않음
      이유는 - hover 이벤트는  Box component 안에 있는 Emoji component에만 적용됨 */}
      <Emoji>🤯</Emoji>
    </Wrapper>
  )
}

export default Animation