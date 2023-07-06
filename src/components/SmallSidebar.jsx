import React from "react";
import { BiSearchAlt, BiStats } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.main`
  display: none;
  @media (max-width: 768px) {
    display: block;

    .navLinks {
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      border-top: 1px solid var(--primary-button);
      background-color: rgba(206, 206, 254, 0.6);
      backdrop-filter: blur(10px);
    }

    .navLinks ul {
      display: flex;
      justify-content: space-evenly;
      padding: 12px;
    }

    .navLinks ul li {
      font-size: 27px;
      color: var(--text);
      transition: all .2s;
    }
    .navLinks ul li:hover {
      
      color: var(--primary-button);
    }
    .navLinks ul li:active {
      scale: .8;
      color: var(--primary-button);
    }

  }
`;

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="main">
        <div className="fit">
          <div className="bottomBar">
            <nav className="navLinks">
              <ul>
                <Link to="/">
                  {" "}
                  <li>
                    {" "}
                    <BiStats />
                  </li>
                </Link>
                <Link to="/all-jobs">
                  {" "}
                  <li>
                    <BiSearchAlt />
                  </li>
                </Link>
                <Link to="/add-job">
                  {" "}
                  <li>
                    <BsBriefcase />
                  </li>
                </Link>
                <Link to="/profile">
                  <li>
                    {" "}
                    <FiUser />
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
