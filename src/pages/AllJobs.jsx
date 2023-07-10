import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Ball from "../utils/Balls";
import { FormInput, SelectOption } from "../components";
import { toast } from "react-toastify";
import { showJobs } from "../features/job/jobSlice";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
const Container = styled.nav`
  width: ${({ width }) => `${width}px`};
  position: absolute;
  top: 70px;
  right: 0px;

  transition: all 0.3s;
  h1 {
    margin-left: 40px;
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

    h1 {
      margin-left: 0;
      text-align: center;
    }
  }
`;

const Wrapper = styled.main`
  .jobsForm {
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
    box-sizing: border-box;
    border: 1px solid var(--primary-button);
    padding: 50px 20px;
    justify-content: center;
    align-items: center;
    background-color: rgba(206, 206, 254, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 6px;
    box-shadow: 0px 10px 20px #927fb8;
  }

  .visible {
    display: none;
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    justify-content: center;
    align-items: center;
    padding-top: 7px;
  }

  .buttons .clear {
    width: 100%;
    background-color: #bd5675;
    /* color:var(--text) */
  }

  .buttons .sbm {
    width: 100%;
  }

  .jobsContainer {
    width: 90%;
    margin: 0 auto;
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .jobCard {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px black solid;
    border: 1px solid var(--primary-button);
    background-color: rgba(206, 206, 254, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 6px;
  }

  .companyName {
    display: flex;
    padding: 16px 24px;
    align-items: center;
    border-bottom:1px solid var(--primary-button);
  }

  .comLogo {
    font-size: 40px;
    margin-right: 40px;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-button);
    color: var(--secondary-button);
    color: white;
    border-radius: 5px;
  }

  .jobName p:first-child {
    font-size: 20px;
    margin-bottom: 3px;
  }

  .jobName p:nth-child(even) {
    color: var(--secondary-button);
  }
  .mid_card-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 16px 24px;
    gap: 10px;
  }
  .mid_card-section p {
    display: flex;
    font-size: 18px;
  }

  .mid_card-section p span {
    font-size: 21px;
    margin-right: 10px;
  }
  .bottom_card-section {
    padding: 16px 24px;
  }

  .edit,
  .delete {
    padding: 0px;
    height: 30px;
    width: 80px;
    background-color: var(--primary-button);
    border-radius: 5px;
  }

  .edit {
    margin-right: 10px;
  }

  @media (min-width: 1240px) {
    .jobsForm {
      padding-top: 70px;
      padding-bottom: 70px;
    }
  }

  @media (max-width: 1240px) {
    .jobsForm {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 1240px) {
    .jobsForm {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 780px) {
    .jobsForm {
      grid-template-columns: 1fr;
      margin-bottom: 50px;
    }

    .disable {
      display: none;
    }

    .visible {
      display: visible;
    }

    .buttons {
      grid-template-columns: 1fr;
      row-gap: 15px;
    }
  }
`;

const AllJobs = () => {
  const { navWidth } = useSelector((store) => store.user);
  const { jobType, isLoading, sort, status, isEditing } = useSelector(
    (store) => store.jobs
  );
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const [jobData, setJobData] = useState({
    search: "",
    status: "pending",
    jobType: "full-time",
    sort: "latest",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setJobData({ ...jobData, [name]: value });
  };

  const clearValues = () => {
    setJobData({
      search: "",
      jobType: "full-time",
      status: "pending",
      sort: "latest",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { search, jobType, status, sort } = jobData;
    if (!search) {
      toast.error("please fill the form");
      return;
    }
    if (isEditing) {
      // dispatch();
      return;
    }
    dispatch(showJobs(jobData));
    clearValues();
  };
  return (
    <Container width={`${width >= 786 ? navWidth : null}`}>
      <Wrapper>
        <h1>{isEditing ? "Edit Jobs" : "All Jobs"}</h1>
        <form onSubmit={handleSubmit}>
          <Ball
            width="200px"
            height="200px"
            direction="top"
            top="10%"
            right="30px"
          />
          <div className="disable">
            <Ball width="300px" height="300px" left="20%" top="10%" />
          </div>
          <div className="visible">
            <Ball
              width="300px"
              height="300px"
              direction="bottom"
              top="50%"
              right="-30px"
            />
          </div>{" "}
          <div className="jobsForm">
            <FormInput
              name="search"
              value={jobData.search}
              title="Search"
              type="text"
              formData={handleChange}
            />
            <SelectOption
              options={status}
              title="Status"
              name="status"
              formData={handleChange}
              value={jobData.status}
            />
            <SelectOption
              options={jobType}
              title="Job Type"
              name="jobType"
              value={jobData.jobType}
              formData={handleChange}
            />{" "}
            <SelectOption
              options={sort}
              title="Sort"
              name="sort"
              formData={handleChange}
              value={jobData.sort}
            />
            <div className="buttons">
              <button type="submit" className="btn button clickEffect sbm">
                {isLoading ? "Searching..." : "Search"}
              </button>
              <button
                type="button"
                onClick={clearValues}
                className="btn button clickEffect clear"
              >
                Clear
              </button>
            </div>
          </div>{" "}
        </form>

        <div className="jobsContainer">
          <div className="jobCard">
            <div className="top_card-section">
              <div className="companyName">
                <div className="comLogo">
                  <p>S</p>
                </div>
                <div className="jobName">
                  <p>Civil Engineer</p>
                  <p>Google</p>
                </div>
              </div>
            </div>
            <div className="mid_card-section">
              <p>
                <span>
                  <CiLocationArrow1 />
                </span>
                Mexian
              </p>
              <p>
                <span>
                  <BsCalendarEvent />
                </span>
                Dec 10th 2021
              </p>
              <p>
                <span>
                  <MdOutlineWorkHistory />
                </span>
                Full time
              </p>
              <p className="status">Mexian</p>
            </div>
            <div className="bottom_card-section">
              <button className=" btn clickEffect edit">Edit</button>
              <button className=" btn clickEffect delete">Delete</button>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default AllJobs;
