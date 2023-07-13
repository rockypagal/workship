import React from "react";
import styled from "styled-components";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
import moment from "moment/moment";

const Wrapper = styled.main`

.comLogo p{
    text-transform: uppercase;
}

`;
const JobCard = ({company,jobLocation,createdAt, position, status, jobType}) => {
 
    const date = moment(createdAt).format('Do MMM , YYYY');
 
    return (
    <Wrapper>
      <div className="jobCard">
        <div className="top_card-section">
          <div className="companyName">
            <div className="comLogo">
              <p>{company.charAt(0)}</p>
            </div>
            <div className="jobName">
              <p>{position}</p>
              <p>{company}</p>
            </div>
          </div>
        </div>
        <div className="mid_card-section">
          <p>
            <span>
              <CiLocationArrow1 />
            </span>
           {jobLocation}
          </p>
          <p>
            <span>
              <BsCalendarEvent />
            </span>
         {date}
          </p>
          <p>
            <span>
              <MdOutlineWorkHistory />
            </span>
           {status}
          </p>
          <p className="status">{jobType}</p>
        </div>
        <div className="bottom_card-section">
          <button className=" btn clickEffect edit">Edit</button>
          <button className=" btn clickEffect delete">Delete</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobCard;
