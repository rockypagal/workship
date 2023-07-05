import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormInput } from "../components";
import { updateUser } from "../features/user/userSlice";

const Nav = styled.nav`
  width: ${({ width }) => `${width}px`};
  position: absolute;
  top: 70px;
  right: 0px;
  transition: all 0.3s;

  /* z-index:-1; */
  /* border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; */
  /* border-radius: 10px; */
  /* background-color: rgba(206, 206, 254, 0.8);
  background-color:rgba(250,234,252,.2); */
  backdrop-filter: blur(10px);
  z-index: -1;
  height: 93vh;
  @media (max-width: 786px) {
    top: 0px;
    left: 0px;
  }
`;

const Wrapper = styled.main`
  width: 90%;
  margin: 0 auto;
  /* background-color:pink; */
  padding: 30px 0;

  .changeBtn {
    color: black;
    font-weight: 500;
    font-size: 20px;
    background: transparent;
    border: 2px solid var(--primary-button);
    padding: 2px 10px;
    border-radius: 6px;
    cursor: pointer;
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
    <Nav width={`${width >= 786 ? navWidth : null}`}>
      <Wrapper>
        <div className="profile_form">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              title="Name"
              value={userData.name}
              name="name"
              formData={formData}
            />
            <FormInput
              type="text"
              title="Last Name"
              value={userData.lastName}
              name="lastName"
              formData={formData}
            />
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

            <button className="btn changeBtn clickEffect">Change</button>
          </form>
        </div>
      </Wrapper>
    </Nav>
  );
};

export default Profile;
