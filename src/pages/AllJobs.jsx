import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Ball from "../utils/Balls";
import { FormInput, SelectOption } from "../components";
import { toast } from "react-toastify";
import { changePage, deleteJob, showJobs } from "../features/job/jobSlice";
import { JobCard } from "../components";
import Loading from "../utils/Loading/Loading";

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
    grid-template-columns: 1fr;
    column-gap: 15px;
    justify-content: center;
    align-items: center;
    padding-top: 7px;
  }

  .buttons button {
    transition: all 0.2s;
  }

  .buttons button:hover {
    scale: 1.03;
    box-shadow: 0px 10px 20px #927fb8;
  }
  .buttons button:active {
    scale: 0.9;
  }

  .buttons .clear {
    width: 100%;
    background-color: #bd5675;
    /* color:var(--text) */
  }

  .buttons .sbm {
    width: 100%;
  }

  .totalJobs {
    padding-top: 20px;
  }
  .jobsContainer {
    width: 90%;
    margin: 0 auto;
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
    padding-bottom: 50px;
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
    box-shadow: 0px 10px 20px #927fb8;
    transition: all 0.2s;
  }

  .jobCard:hover {
    scale: 1.05;
  }

  .companyName {
    display: flex;
    padding: 16px 24px;
    align-items: center;
    border-bottom: 1px solid var(--primary-button);
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
    gap: 20px;
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

  .pagination {
    width: 90%;
    margin: 0 auto;
  }

  .pagination,
  .pagination div {
    /* border: 1px solid black; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;
  }

  .pagination div {
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    background-color: rgba(206, 206, 254, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 6px;
    box-shadow: 0px 0px 20px #927fb8;
    flex-wrap: wrap;
    border: 1px solid var(--primary-button);
    overflow: hidden;
  }

  .pagination button {
  transition: all ease .3s;
  box-sizing: border-box;
  }

  .pagination button:hover {
  

    /* transform: translateY(-5px); */

  }

  .pageButton {
    color: var(--secondary-button);
    font-size: 20px;
    font-weight: 500;
    /* background-color: var(--primary-button); */
    width: 50px;
    height: 30px;

    /* border-radius: 5px; */
  }

  .active {
    color: var(--primary-button);
    font-size: 20px;
    font-weight: 500;
    /* background-color: var(--primary-button); */
    width: 50px;
    height: 30px;
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
    padding-bottom: 50px;

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

    .jobsContainer {
      grid-template-columns: 1fr;
      column-gap: 30px;
      row-gap: 30px;
      /* margin-bottom: 50px; */
    }

    .totalJobs {
      padding-top: 0px;
    }

    .buttons button:hover {
      scale: 1;
      box-shadow: none;
    }
    .buttons button:active {
      scale: 0.9;
    }

    .jobCard:hover {
      scale: 1;
    }
    .jobCard:active {
      scale: 0.98;
    }

    .pagination {
      /* border: 1px solid black; */

      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;
      padding-right: 0px;
      margin: 0 auto;
    }
  }
`;

const AllJobs = () => {
  const { navWidth } = useSelector((store) => store.user);
  const { jobType, isLoading, isDeleted, resJob, sort, page, status } =
    useSelector((store) => store.jobs);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const [jobData, setJobData] = useState({
    search: "",
    status: "all",
    jobType: "all",
    sort: "latest",
  });

  const [pageActive, setPageActive] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setJobData({ ...jobData, [name]: value });
  };

  const clearValues = () => {
    setJobData({
      search: "",
      jobType: "all",
      status: "all",
      sort: "latest",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showJobs(jobData));
  };

  const { jobs, numOfPages, totalJobs } = resJob;

  const pages = Array.from({ length: numOfPages }, (item, index) => {
    return index + 1;
  });

  const handlePagination = (item) => {
    dispatch(changePage(item));
    setPageActive(true);
  };

  useEffect(() => {
    dispatch(showJobs(jobData));
  }, [jobData.sort, jobData.jobType, jobData.status, page, isDeleted]);

  return (
    <Container width={`${width >= 786 ? navWidth : null}`}>
      <Wrapper>
        <h1>All Jobs</h1>
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
              options={["all", ...status]}
              title="Status"
              name="status"
              formData={handleChange}
              value={jobData.status}
            />
            <SelectOption
              options={["all", ...jobType]}
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
            </div>
            <div className="buttons">
              <button
                type="button"
                onClick={clearValues}
                className="btn clickEffect button  clear"
              >
                Clear
              </button>
            </div>
          </div>{" "}
        </form>

        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="totalJobs">
              <h1>
                {totalJobs} {totalJobs > 1 ? "Jobs" : "Job"}{" "}
              </h1>
            </div>
            <div className="jobsContainer">
              {jobs &&
                jobs.map((item) => {
                  const {
                    _id,
                    createdAt,
                    company,
                    position,
                    status,
                    jobType,
                    jobLocation,
                  } = item;

                  return (
                    <JobCard
                      key={_id}
                      _id={_id}
                      createdAt={createdAt}
                      company={company}
                      position={position}
                      status={status}
                      jobType={jobType}
                      jobLocation={jobLocation}
                    />
                  );
                })}
            </div>
            <div className="pagination">
              <div>
                {pages &&
                  pages.map((item, index) => {
                    return (
                      <button
                        className={
                          page === item ? "btn active" : "btn pageButton"
                        }
                        key={index}
                        onClick={() => handlePagination(item)}
                      >
                        {item}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default AllJobs;
