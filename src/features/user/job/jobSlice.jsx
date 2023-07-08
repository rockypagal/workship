import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchData from "../../../utils/FetchData";
import { toast } from "react-toastify";

export const addJobs = createAsyncThunk(
  "add/job",
  async (formData, thunkApi) => {
    try {
      const res = await FetchData.post("/jobs",formData);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(err.response.data.msg);
    }
  }
);

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    isLoading: false,
    isEditing: false,
    status: ["pending", "interview", "declined"],
    jobType: ["full-time", "part-time", "remote", "internship"],
    sort: ["latest", "oldest", "a-z", "z-a"],
  },
  extraReducers: (builds) => {
    builds
      .addCase(addJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Job has been added successfully");
      })
      .addCase(addJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});


export default jobSlice.reducer