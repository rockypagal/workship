import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Navbar,SmallSidebar } from "../components";
import styled from "styled-components";

const Wrapper = styled.main`
display: flex;
.dashboard_sidebar{
display: none;
}


.dashboard_content{
  width:90vw;
  margin:0 auto;
  padding:2rem 0;
}

.sideTo{
  flex: 2;
}

.bottomBar{
  position: fixed;
  bottom: 0;
}

@media (min-width:768px) {
  .dashboard_sidebar{
    display:grid;
    grid-template-columns: auto 1fr;
  }
  .dashboard_content{
    width:90%;
  }

}
`;

const SharedLayout = () => {
  const [logo, setLogo] = useState();
  return (
    <>
      <Wrapper>
        <div className="dashboard_sidebar">
          <Sidebar />
        </div>
        <div className=" sideTo">
          <Navbar />
          <div className="dashboard_content">
            <Outlet />
          </div>
          <SmallSidebar/>
        </div>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
