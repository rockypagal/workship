import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchData from "../../utils/FetchData";
import { toast } from "react-toastify";

export const addJobs = createAsyncThunk(
  "add/job",
  async (formData, thunkApi) => {
    try {
      const res = await FetchData.post("/jobs", formData);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(err.response.data.msg);
    }
  }
);

export const showJobs = createAsyncThunk(
  "show/jobs",
  async (formData, thunkApi) => {
    const { page } = thunkApi.getState().jobs;
    const { search, sort, jobType, status } = formData;
    let url = `/jobs?sort=${sort}&jobType=${jobType}&status=${status}&page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const res = await FetchData.get(url);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateJob = createAsyncThunk(
  "update/job",
  async (jobInfo, thunkApi) => {
    try {
      const { jobId } = thunkApi.getState().jobs;
      let url = `/jobs/${jobId}`;
      const res = await FetchData.patch(url, jobInfo);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deleteJob = createAsyncThunk(
  "delete/Job",
  async (id, thunkApi) => {
    try {
      let url = `/jobs/${id}`;
      console.log(url);
      const res = await FetchData.delete(url)
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg)
    }
  }
);

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    isLoading: false,
    isEditing: false,
    status: [ "pending", "interview", "declined"],
    jobType: [ "full-time", "part-time", "remote", "internship"],
    sort: ["latest", "oldest", "a-z", "z-a"],
    page: 1,
    resJob: "",
    jobId: "",
    postPosition: "",
    postCompany: "",
    postStatus: "pending",
    postJobType: "full-time",
    isDeleted: false,
  },

  reducers: {
    changePage: (state, { payload }) => {
      console.log(payload, "change");
      state.page = payload;
    },

    changeEditing: (state, { payload }) => {
      let { _id, position, company, jobType, status } = payload;
      state.isEditing = true;
      state.jobId = _id;
      state.postPosition = position;
      state.postCompany = company;
      state.postJobType = jobType;
      state.postStatus = status;
    },
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
      })
      .addCase(showJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.resJob = payload;
      })
      .addCase(showJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("Job updated successfully");
        state.isEditing = false;
      })
      .addCase(updateJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      }).addCase(deleteJob.pending, (state, { payload }) => {
        state.isLoading = true;
      }).addCase(deleteJob.fulfilled, (state, { payload})=>{
        state.isLoading = false;
        state.isDeleted = !state.isDeleted;
        toast.success('Job deleted successfully');
      }).addCase(deleteJob.rejected,(state,payload)=>{
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { changePage, changeEditing } = jobSlice.actions;

export default jobSlice.reducer;
