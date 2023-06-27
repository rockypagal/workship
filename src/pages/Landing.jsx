import React,{useEffect, useState} from "react";
import styled from "styled-components";
import logo from "../assets/logos/main_logo.png";
import landing_img from "../assets/svg/landing_img.svg";
import Ball from "../utils/Balls";
import bg from "../assets/bg/bg.png";
import { MagicBtn } from "../components";
import { Link } from "react-router-dom";
// import Wrapper from '../utils/Wrapper'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .Wrapper {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }



  h1 {
    text-transform: uppercase;
  }
  /* 
  .landing__balls {
    width: 400px;
    height: 400px;
    background: linear-gradient(to right, #ff00cc, #333399);
    clip-path: circle(50%);
    position: fixed;
    top:-50px;
    left: -50px;
    z-index: -2;

  } */

  .landing__blur {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: -1;
    backdrop-filter: blur(4rem);
  }

  .landing__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    margin-bottom: 50px;
    margin-top: 20px;
  }

  .landing__logo img {
    width: 150px;
    cursor: pointer;
  }

  .landing__content {
    display: flex;
    padding: 5rem 0rem;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
    column-gap: 50px;
  }

  .landing__content-left {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
  }

  .landing__content-left h1 {
    font-size: 50px;
    line-height: 4rem;
    padding: 0;
    margin: 0;
  }

  .landing__content-left p {
    font-size: 14px;
    line-height: 1.5rem;
  }

  .lading__content-right {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lading__content-right img {
    width: 100%;
  }
  @media screen and (min-width: 1536px) {
    .Wrapper {
      max-width: 1280px;
    }

    .landing__logo img {
      width: 180px;
    }
  }

  @media screen and (max-width: 1280px) {
    .Wrapper {
      max-width: 1024px;
    }
  }

  @media screen and (max-width: 1024px) {
    .Wrapper {
      max-width: 768px;
    }

    .landing__content-left h1 {
      font-size: 2.4rem;
      line-height: 3.5rem;
      padding: 0;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .Wrapper {
      max-width: 640px;
    }

    .landing__content {
      padding: 5rem 0rem;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: space-between;
      gap: 50px;
    }
    .landing__content {
      padding: 5rem 0rem;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: space-between;
      gap: 90px;
    }

    height: auto;

.landing__content-left{
  gap:20px;
}

    .landing__content-left h1 {
      font-size: 2.5rem;
      line-height: 2.7rem;
      padding: 0;
      margin: 0;
    }

  }

  @media screen and (max-width: 640px) {
    .Wrapper {
      max-width: 475px;
    }
  }

  @media screen and (max-width: 475px) {
    .Wrapper {
      width: 100%;
    }
  }
`;
const Landing = () => {



  return (
    <Wrapper>
      <div className="landing__blur"/>
      <div className="Wrapper">
        <div className="landing">
          <div className="landing__balls">
            <Ball width="200px" height="200px" top="-70px" left="460px" />
            <Ball width="400px" height="400px" right="169px" top="200px" />
          </div>

          <div className="landing__logo Wrapper">
            <img src={logo} />
            <div className="landing__logo-login">
              <button className="btn"></button>
            </div>
          </div>

          <div className="landing__content Wrapper">
            <div className="landing__content-left">
              <h1>
                We know how <br /> to keep your <br /> jobs up to date
              </h1>
              <p>
                Introducing JobTracker, the ultimate app to streamline your job
                search process. With JobTracker, you can easily keep track of
                all your job applications in one place. From saving job listings
                to noting application deadlines and interview dates,{" "}
              </p>
              <Link to="/register" className="button landing__content-btn">
                Register
              </Link>
            </div>
            <div className="lading__content-right">
              <img src={landing_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
