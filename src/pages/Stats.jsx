import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getJobStats } from "../features/job/jobSlice";
import { AreaCharts } from "../components";

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
  .statsCards,
  .charts {
    width: 90%;
    /* border: 1px solid black; */
    margin: 0 auto;
  }

  .card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 5px;
    gap: 15px;
  }

  .card div {
    border: 1px solid var(--primary-button);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: rgba(206, 206, 254, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 6px;
    box-shadow: 0px 0px 20px #927fb8;
  }

  .charts {
    margin-top: 50px;
  }

  @media screen and (min-width: 1536px) {
    .container {
      max-width: 1280px;
    }
  }

  @media screen and (max-width: 1280px) {
    .container {
      max-width: 1024px;
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      max-width: 768px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      max-width: 640px;
    }

    .card {
      grid-template-columns: 1fr;
    }

    padding-bottom: 60px;
  }

  @media screen and (max-width: 640px) {
    .container {
      max-width: 475px;
    }
  }

  @media screen and (max-width: 475px) {
    .container {
      width: 100%;
    }
  }
`;

const Stats = () => {
  const { navWidth } = useSelector((store) => store.user);
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { jobInterview, jobDeclined, jobPending,monthlyData } = useSelector(
    (store) => store.jobs
  );
  useEffect(() => {
    dispatch(getJobStats());
  }, []);
  console.log(monthlyData);
  return (
    <Container width={`${width >= 786 ? navWidth : null}`}>
      <Wrapper>
        <h1>Stats</h1>
        <div className="statsCards">
          <div className="card">
            <div>
              <h2>Interview {jobInterview}</h2>
            </div>
            <div>
              <h2>Pending {jobPending}</h2>
            </div>
            <div>
              <h2>Declined {jobDeclined}</h2>
            </div>
          </div>
        </div>

        <h1>Area Chart</h1>
        <div className="charts">

<AreaCharts data={monthlyData}/>

        </div>
      </Wrapper>
    </Container>
  );
};

export default Stats;
