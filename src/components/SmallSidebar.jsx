import React from "react";
import styled from "styled-components";
const Wrapper = styled.main`
  position: fixed;
  left: 0;
  bottom:0;
`;

const SmallSidebar = () => {
  return <Wrapper>

    <div className="main">
      <h2>footer</h2>
    </div>
  </Wrapper>;
};

export default SmallSidebar;
