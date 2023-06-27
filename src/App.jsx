import { useState } from "react";
import "normalize.css";
import GlobalStyle from "./utils/GlobalStyles";
import './App.css'
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddJob,
  AllJobs,
  Error,
  Landing,
  Login,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/";

function App() {
  const call = () => {
    toast.success("hello");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
