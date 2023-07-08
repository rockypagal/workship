import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;

  .selectInput{
      display: flex;
    flex-direction: column;
    gap: 7px;
  }
  select {
   min-width: 100%;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 20px;
    padding: 4px;
    box-sizing: border-box;
    background-color: #e8e8fd;
    border-radius: 5px;
    border: 1px solid #722ce2;
  }

   label{
    font-size: 18px;
    font-weight: 500;
  }

  select:focus {
    outline: 1px solid var(--secondary-button);
  }


    @media screen and (max-width: 1024px) {
    
   .selectInput {
      gap:5px;
    }
  }

`;

const SelectOption = ({ options, name, title, formData ,value,defaultValue}) => {
  return (
    <Wrapper>
      <div className="selectInput">
        <label htmlFor={name}>{title}</label>
        <select id={name} name={name} value={value} onChange={formData}>
          {options.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </Wrapper>
  );
};

export default SelectOption;
