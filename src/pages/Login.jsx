import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Ball from "../utils/Balls";
import styled from "styled-components";
import logo from "../assets/logos/main_logo.png";
import { FormInput } from "../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  RegisterUser,
  logOut,
  loginUser,
  checkIsMember,
} from "../features/user/userSlice";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  h3 {
    text-align: center;
  }

  /* .login__form{
    width:450px;
    height: 500px;
    box-shadow: 0 0 1rem  0 black;
    border-radius: 15px;
    background-color:rgba(255, 255, 255, 0.15);
    backdrop-filter:blur(5px)
  } */
  .login__form {
    border-top: 2px solid rgba(255, 255, 255, 0.1);
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    width: 400px;
    padding: 40px 30px;
    background: white;
    box-sizing: border-box;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    transition: all ease 0.2s;
  }

  form {
    gap: 20px;
    flex: 1;
    min-width: 100%;
  }

  .login__heading {
    width: 100%;
    gap: 10px;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .login__heading img {
    margin: auto;
    width: 170px;
    padding-bottom: 25px;
  }

  .from-btn {
    width: 100%;
    margin: auto;
    display: block;
    margin-top: 10px;
  }

  .confirm__text {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }

  .confirm__text button {
    color: var(--secondary-button);
  }

  @media screen and (min-width: 1536px) {
    .Wrapper {
      max-width: 1280px;
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
    .login__form {
      width: 360px;
      padding: 20px 30px;
    }

    form {
      gap: 10px;
    }

    .confirm__text {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    .Wrapper {
      max-width: 640px;
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

    .login__form {
      margin: auto;
    }
  }
`;

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { name, isLoading, isMember, isUser } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUser) {
      navigate("/");
    }
  }, [isUser]);

  const formData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = userData;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please enter a valid name or email or password");
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }

    dispatch(RegisterUser(userData));
  };

  return (
    <div className="login_main">
      <Ball
        width="400px"
        height="400px"
        top="600px"
        right="500px"
        direction="top"
      />
      <Ball
        width="300px"
        height="300px"
        direction="bottom"
        top="100px"
        right="900px"
      />
      <div className="blur"></div>
      <Wrapper>
        <div className="Wrapper">
          <div className="login__form">
            <div className="login__heading">
              <img src={logo} />
              <h3>{isMember ? "Login" : "Register"}</h3>
            </div>

            <form onSubmit={handleSubmit}>
              {isMember || (
                <FormInput
                  type="text"
                  title="Name"
                  value={userData.name}
                  name="name"
                  formData={formData}
                />
              )}

              <FormInput
                type="email"
                title="Email"
                value={userData.email}
                name="email"
                formData={formData}
              />
              <FormInput
                type="password"
                title="Password"
                value={userData.password}
                name="password"
                formData={formData}
              />

              <button
                type="submit"
                className="btn button from-btn"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
              <div className="confirm__text">
                <p>{isMember ? "Not a member yet?" : "Already a member?"}</p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => dispatch(checkIsMember())}
                >
                  {isMember ? "Register " : "Login "}
                   <span style={{color:'black'}}>or</span>
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{color:'#722ce2',margin:'0px',padding:'0px'}}
                  onClick={() => dispatch(loginUser({email:'testUser@test.com',password:'secret'}))
                  }
                >Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
