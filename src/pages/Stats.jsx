import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../features/user/userSlice";

const Stats = () => {
  const dispatch = useDispatch()

  return (
    <div>
      Stats
      <button type="button" onClick={() => dispatch(logOut())}>
        logout
      </button>
    </div>
  );
};

export default Stats;
