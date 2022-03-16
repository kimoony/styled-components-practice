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

const Box = styled.div`
height: 200px;
width: 200px;
background-color: red;
animation: ${rotationAnimation} 1s linear infinite;
display: flex;
justify-content: center;
align-items: center;
/* component 안에서 element 선택 */
span {
  font-size: 40px;
  transition: 1s all;
  &:hover { /* span:hover{} 와 같다. */
    font-size: 100px;
    transition: 1s all;
  }
  &:active {
    opacity: 0;
  }
}
`;

const Animation = () => {
  return (
    <Wrapper>
      <Box>
        {/* component 안에 element 도 사용할 수 있다. */}
        <span>🤪</span>
      </Box>
    </Wrapper>
  )
}

export default Animation