import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.nav`
  width: ${({ width }) => `${width}px`};
  position: absolute;
  top: 70px;
  right: 0px;

  transition: all 0.3s;
  h1 {
    margin-left:40px;
  }

  /* z-index:-1; */
  /* border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; */
  /* border-radius: 10px; */
  /* background-color: rgba(206, 206, 254, 0.8);
  background-color:rgba(250,234,252,.2); */
  z-index: -1;
  height: 93vh;
  @media (max-width: 786px) {
    width: 100%;

    h1{
      margin-left:0;
      text-align:center;
    }
  }
`;

const Stats = () => {
  const { navWidth} = useSelector((store) => store.user);
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <Container width={`${width >= 786 ? navWidth : null}`} >stats</Container>
  )
}

export default Stats;
