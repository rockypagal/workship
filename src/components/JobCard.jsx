import React from "react";
import styled from "styled-components";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeEditing, deleteJob } from "../features/job/jobSlice";

const Wrapper = styled.main`
  .comLogo p {
    text-transform: uppercase;
  }
`;
const JobCard = ({
  company,
  jobLocation,
  createdAt,
  position,
  status,
  jobType,
  _id,
  handleDeleteJob,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("Do MMM , YYYY");

  const handleDelete = () =>{
    dispatch(deleteJob(_id))
  }

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
          <Link to="/add-job">
            <button
              className=" btn clickEffect edit"
              onClick={() => dispatch(changeEditing({_id,company,jobLocation,jobType,status,position}))}
            >
              Edit
            </button>
          </Link>
          <button className=" btn clickEffect delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobCard;
