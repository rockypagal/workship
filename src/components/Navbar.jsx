import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Ball from "../utils/Balls";
import { useDispatch, useSelector } from "react-redux";
import {
  manageSidebar,
  changeNavSize,
  logOut,
} from "../features/user/userSlice";
import { CgMenu } from "react-icons/cg";
// import { CiUser } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { BsCaretDown } from "react-icons/bs";
import { motion } from "framer-motion";

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
    padding: 0px 20px;
    box-sizing: border-box;
  }

  .title {
    font-size: 25px;
  }

  .menu {
    color: var(--text);
    font-size: 25px;
    padding: 0px;
  }
  h2 {
    padding-left: 15px;
  }

  .capital {
    text-transform: capitalize;
  }

  .user {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-size: 20px;
    background: transparent;
    /* border: 2px solid var(--primary-button);
    border: 2px solid black; */
    padding: 2px 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid var(--primary-button);
  }
  .user:hover {
    color: var(--secondary-button);
  }

  .logoutBtn {
    position: absolute;
    /* color: black; */
    font-weight: 500;
    font-size: 20px;
    background: var(--primary-button);
    padding: 7px 20px;
    border-radius: 6px;
    cursor: pointer;
    z-index: -2;
  }


  @media (max-width: 768px) {
    .menu {
      display: none;
    }
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

  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 786px) {
    top: 0px;
    left: 0px;
  }
`;
const Navbar = () => {
  const { navWidth } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [showLogout, setShowLogout] = useState(false);

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
  }, [width]);

  useEffect(()=>{
if(width < 1180){
  menuBar()
}
  },[])

  return (
    <Nav width={`${width >= 786 ? navWidth : null}`}>
      <Ball width="200px" height="200px" top="-140px" />
      <Wrapper>
        <div className=" nav">
          <button className="btn menu clickEffect" onClick={menuBar}>
            <CgMenu />
          </button>
          <p className="title">Dashboard</p>

          <div
            className="user clickEffect"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FiUser />
            <p className="capital">{name}</p>
            <BsCaretDown style={{ marginTop: "5px" }} />
          </div>

          <motion.button
            animate={{
              right: showLogout? 30: -200,
              top:showLogout? 85: 85,
              opacity: showLogout? 1:0
            }}
            initial={{
              top:-200,
              right: 50,
              opacity: 0,
            }}
            transition={{
              type:'spring',
              stiffness:130
            }}
            whileTap={{
              scale:.9
            }}
            className=" btn logoutBtn  "
            onClick={() => dispatch(logOut())}
          >
            Logout
          </motion.button>
        </div>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
