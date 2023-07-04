import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Ball from "../utils/Balls";
import { useDispatch, useSelector } from "react-redux";
import { manageSidebar, changeNavSize } from "../features/user/userSlice";
import { CgMenu } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
const Wrapper = styled.main`
  /* box-shadow:0px 0px 50px #8084b8; */
  background-color: rgba(206, 206, 254, 0.6);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  .nav {
    border-bottom: 1px solid #8041e5;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  .title{
    font-size:25px;
  }

  
  .menu {
    color: var(--text);
    font-size: 25px;
  }
  h2 {
    padding-left: 15px;
  }
`;

const Nav = styled.nav`
  width: ${({ width }) => `${width}px`};
  position: fixed;
  right: 0px;
  transition: all 0.3s;
  /* border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; */
  /* border-radius: 10px; */
  overflow: hidden;

  box-shadow:3px 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 786px) {
    top: 0px;
    left: 0px;
  }
`;
const Navbar = () => {
  const { navWidth } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);
  const { isSidebarOpen, name } = useSelector((store) => store.user);
  const checkSize = () => {
    setWidth(window.innerWidth);
    dispatch(changeNavSize(width));
  };
  const menuBar = () => {
    dispatch(manageSidebar());
    dispatch(changeNavSize(width));
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  useEffect(() => {
    dispatch(changeNavSize(width));
  }, []);

  return (
    <Nav width={`${width >= 786 ? navWidth : null}`}>
      <Ball width="200px" height="200px" top="-100px" />
      <Wrapper>
        <div className=" nav">
          <button className="btn menu" onClick={menuBar}>
            <CgMenu />
          </button>
          <p className="title">Dashboard</p>

          <div className="user">
            <CiUser />
            <p>{name}</p>
          </div>
        </div>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
