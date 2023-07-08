import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormInput } from "../components";
import { updateUser } from "../features/user/userSlice";
import Ball from "../utils/Balls";

const Container = styled.nav`
  width: ${({ width }) => `${width}px`};
  position: absolute;
  top: 70px;
  right: 0px;
  transition: all 0.3s;
  h1 {
    text-align: center;
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
  }
`;

const Wrapper = styled.main`
  width: 90%;
  margin: 0 auto;
  /* background-color:pink; */
  padding: 30px 0;

  .changeBtn {
    width: 50%;
    margin: 0 auto;
    display: block;
  }

  .profile_form {
    border: 1px solid var(--primary-button);

    padding: 20px 30px;
    border-radius: 6px;
    /* box-sizing: border-box; */
    background-color: rgba(206, 206, 254, 0.6);
    backdrop-filter: blur(20px);
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }
  .userName {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .balls {
    position: absolute;
    z-index: -4;
  }

  .fit {
    /* width: fit-content; */
    /* border: 1px solid black; */
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
  }
  @media screen and (min-width: 1280px) {
    .profile_form {
    }
  }

  @media screen and (max-width: 1280px) {
    .container {
      max-width: 1024px;
    }
  }

  @media screen and (max-width: 1024px) {
    .fit {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    .fit {
      width: 100%;
    }
    .profile_form {
      width: 40%;
    }
  }

  @media screen and (max-width: 640px) {
    .container {
      max-width: 475px;
    } .profile_form {
      width: 70%;
    }
  }

  @media screen and (max-width: 475px) {
    .container {
      width: 100%;
    }
  }

  .username {
    flex: 1;
    width: 100%;
  }
`;

const Profile = () => {
  const { name, lastName, email, location } = useSelector(
    (store) => store.user
  );

  const [userData, setUserData] = useState({
    name,
    lastName,
    email,
    location,
  });

  const { navWidth } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  const formData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userData));
  };

  return (
    <Container width={`${width >= 786 ? navWidth : null}`}>
      <Wrapper>
        <h1>User Profile</h1>
        <div className="fit">
          {" "}
          <div className="balls">
            <Ball width="200px" height="200px" direction="top" />
          </div>
          <div className="profile_form">
            <form onSubmit={handleSubmit}>
              <div className="u">
                <div className="">
                  <FormInput
                    type="text"
                    title="Name"
                    value={userData.name}
                    name="name"
                    formData={formData}
                  />
                </div>
                <div className="">
                  <FormInput
                    type="text"
                    title="Last Name"
                    value={userData.lastName}
                    name="lastName"
                    formData={formData}
                  />
                </div>
              </div>
              <FormInput
                type="text"
                title="Email"
                value={userData.email}
                name="email"
                formData={formData}
              />
              <FormInput
                type="text"
                title="location"
                value={userData.location}
                name="location"
                formData={formData}
              />
              <button className="btn button changeBtn clickEffect">
                Change
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Profile;
