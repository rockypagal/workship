import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  .button {
    position: relative;
    transition: transform 0.4s;
  }

  .button__content {
    position: relative;
    background: var(--primary-button);
    padding: 0.7rem 2.8rem;
    border-radius: 4rem;
    border: 3px solid var(--text);
    color: var(--text);
    display: flex;
    column-gap: 0.5rem;
    overflow: hidden;
  }

  .button__text {
    position: relative;
    z-index: 2;
    font-weight: 600;
  }

  .button__reflection-1,
  .button__reflection-2 {
    width: 8px;
    height: 120px;
    background: hsla(48, 30%, 95%, 0.3);
    rotate: 30deg;
    position: absolute;
    inset: 0;
    top: 0;
    left:-210%;
    margin: auto;
    transition: left 0.6s cubic-bezier(0.2, 0.5, 0.2, 1.2);
  }

  .button__reflection-1::after {
    content: "";
    width: 26px;
    height: 100%;
    background-color: hsla(48, 30%, 95%, 0.3);
    position: absolute;
    top: -1rem;
    left: 1.25rem;
  }
  .button__reflection-2::after {
    content: "";
    width: 40px;
    height: 100%;
    background-color: hsla(48, 30%, 95%, 0.3);
    position: absolute;
    top: -1rem;
    left: 1.25rem;
  }

  .button__shadow {
    position: absolute;
    top: 1px;
    left: 7px;
    width: 86%;
    height: 40px;
    background: var(--secondary-button);
    border-radius: 4rem;
    border: 3px solid black;
    z-index: -1;
    transition: all .3s;
  }

  .button:hover .button__shadow{
    transform: translate(-6px,10px);
  }
  .button:hover .button__reflection-1{
    left:120%;
  }
  .button:hover .button__reflection-2{
    left:-70%;
  }
  .button:hover {
    transform:scale(1.1);
  }
`;

const MagicBtn = ({ text }) => {
  return (
    <Wrapper>
      <button className="button btn">
        <div className="button__content">
          <span className="button__text">{text}</span>
          <div className="button__reflection-1"></div>
          <div className="button__reflection-2"></div>
        </div>
        <div className="button__shadow"></div>
      </button>
    </Wrapper>
  );
};

export default MagicBtn;
