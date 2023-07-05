import React from "react";
import styled from "styled-components";
import logo from "../assets/logos/main_logo.png";
import minLogo from "../assets/logos/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {FaChartSimple} from 'react-icons/fa';
import { BiSearchAlt } from "react-icons/bi";
import { BiStats } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import Ball from "../utils/Balls";

const Wrapper = styled.main`
  /* box-shadow: 0px 0px 50px #8084b8; */

  .showSidebar {
    transition: all 0.3s ease;
    border-right: 1px solid #8041e5;
    min-height: 100vh;
    height: 100vh;
    padding: 1rem 2rem;
    box-sizing: border-box;
    /* border-top-right-radius: 10px;
    border-bottom-right-radius: 10px; */
    width: 270px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: rgba(206, 206, 254, 0.6);
    backdrop-filter: blur(10px);
    /* z-index: 0; */
      box-shadow:3px 0px 10px rgba(0, 0, 0, 0.3);
  }

  .hide-sidebar {
    transition: all 0.3s ease;
    width: 100px;
  }

  .hide-sidebar span {
    display: none;
  }

  .hide-sidebar img {
  }

  .hide-sidebar li {
    justify-content: center;
    font-size: 25px;
    margin-bottom: 5px;
  }

  .logo {
    margin-bottom: 3rem;
  }
  .logo img {
    width: 100%;
  }

  font-size: 22px;

  ul {
    padding: 0;
  }

  li {
    padding: 15px 0;
    color: var(--text);
    transition: all 0.3s;
    display: flex;
    gap: 15px;
    transition: all 0.3s;
    align-items: center;
  }
  li:hover {
    color: var(--secondary-button);
    padding-left: 15px;
  }
  
  li:active {
    /* padding-left: 25px; */
    scale: .9;
  }

  .hide-sidebar li:hover {
    justify-content: center;
    padding-left: 0;
    scale: calc(1.2);
  } 
  
   .hide-sidebar li:active {
    scale: .9;
  }
  span {
    width: 100%;
  }
  @keyframes text {
    from {
      font-size: 0px;
    }
    to {
      font-size: 22px;
    }
  }
  .animate {
    font-size: 22px;
    animation: text 0.3s ease 1 normal;
  }

  .icon {
    font-size: 30px;
  }

  .backBall {
    z-index: -4;
  }
`;

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div className="backBall">
        <Ball
          width="200px"
          height="200px"
          left="-100px"
          top="100px"
          direction="left "
        />
      </div>
      <div
        className={isSidebarOpen ? "showSidebar" : "showSidebar hide-sidebar"}
      >
        {" "}
        <div className="sidebar">
          <div className="logo">
            <img src={isSidebarOpen ? logo : minLogo} alt="" />
          </div>
          <nav className="navLinks">
            <ul>
              <Link to="/">
                {" "}
                <li className={isSidebarOpen ? "hide_text":''}>
                  {" "}
                  <BiStats className={isSidebarOpen && "icon"} />
                  <span className={isSidebarOpen ? " animate":''}>Stats</span>
                </li>
              </Link>
              <Link to="/all-jobs">
                {" "}
                <li className={isSidebarOpen ? "hide_text":''}>
                  <BiSearchAlt className="icon" />
                  <span className={isSidebarOpen ? "animate":''}>All Jobs</span>
                </li>
              </Link>
              <Link to="/add-job">
                {" "}
                <li className={isSidebarOpen ? "hide_text":''}>
                  <BsBriefcase className={isSidebarOpen && "icon"} />
                  <span className={isSidebarOpen ? "animate":''}>Add Jobs</span>
                </li>
              </Link>
              <Link to="/profile">
                <li className={isSidebarOpen ? "hide_text":''}>
                  {" "}
                  <FiUser className={isSidebarOpen && "icon"} />
                  <span className={isSidebarOpen ? "animate":''}>Profile</span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
