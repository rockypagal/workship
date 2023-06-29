import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.main`
  .formInput {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .formInput input {
    min-width: 100%;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 20px;
    padding: 7px;
    box-sizing: border-box;
    background-color: #e8e8fd;
    border-radius: 5px;
    border: 1px solid #722ce2;
  }

  .formInput input:focus {
    outline: 1px solid var(--secondary-button);
  }

  input[type="password"] {
    font-family: Verdana;
    letter-spacing: 0.125em;
    font-weight: 500;
  }




  @media screen and (max-width: 1024px) {
    .container {
      max-width: 768px;
    }.formInput {
      display: flex;
      flex-direction: column;
      gap:5px;
    }

    .formInput input {
      margin-bottom: 15px;
    }
  }

`;

const FormInput = ({ title, type, name, value, formData }) => {
  return (
    <Wrapper>
      <div className="formInput">
        <label htmlFor={name}>{title}</label>
        <input
          id={name}
          type={type}
          name={name}
          onChange={formData}
          value={value}
        />
      </div>
    </Wrapper>
  );
};

export default FormInput;
