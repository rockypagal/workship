import React, { useState } from "react";
import { addJobs } from "../features/user/job/jobSlice";
import styled from "styled-components";
import FormInput from "../components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { SelectOption } from "../components";
import Ball from "../utils/Balls";
import { toast } from "react-toastify";

const Container = styled.nav`
  width: ${({ width }) => `${width}px`};
  position: absolute;
  top: 70px;
  right: 0px;

  transition: all 0.3s;
  h1 {
    margin-left:40px;
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

    h1{
      margin-left:0;
      text-align:center;
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
    padding-top:7px ;
  }

  .buttons .clear {
    width: 100%;
    background-color: #bd5675;
    /* color:var(--text) */
  }

  .buttons .sbm {
    width: 100%;
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

const AddJob = () => {
  const { navWidth, location } = useSelector((store) => store.user);
  const { jobType,isLoading, status,isEditing } = useSelector((store) => store.jobs);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const [jobData, setJobData] = useState({
    position: "",
    company: "",
    jobLocation: location,
    jobType: 'full-time',
    status: "pending",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setJobData({ ...jobData, [name]: value });
  };

  const clearValues = ()=>{
    setJobData({
    position: "",
    company: "",
    jobLocation: location,
    jobType: 'full-time',
    status: "pending",
  })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { position, company, jobLocation, status, jobType } = jobData;
    console.log(position, company, jobLocation, status, jobType);
    if (!position || !company || !location || !status || !jobType) {
      toast.error("please fill the form");
      return;
    }
    if(isEditing){
      // dispatch();
      return;
    }
    dispatch(addJobs(jobData));
    clearValues();
  };
  return (
    <Container width={`${width >= 786 ? navWidth : null}`}>
      <Wrapper>
      <h1>{isEditing?'Edit Jobs':'Add Jobs'}</h1>
        <form onSubmit={handleSubmit}>
          <Ball width="200px" height="200px" left="20%" />
          <div className="disable">
            <Ball
              width="300px"
              height="300px"
              direction="bottom"
              top="10%"
              right="30px"
            />
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
              name="position"
              value={jobData.position}
              title="Position"
              type="text"
              formData={handleChange}
            />
            <FormInput
              name="company"
              value={jobData.company}
              title="Company"
              type="text"
              formData={handleChange}
            />
            <FormInput
              name="jobLocation"
              value={jobData.jobLocation}
              title="Job Location"
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
            />
            <div className="buttons">
              <button type="submit" className="btn button clickEffect sbm">
              {isLoading ? 'Adding...': 'Add'}
              </button>
              <button type="button" onClick={clearValues} className="btn button clickEffect clear">
                Clear
              </button>
            </div>
          </div>{" "}
        </form>
      </Wrapper>
    </Container>
  );
};

export default AddJob;
