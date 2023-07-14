import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchData from "../../utils/FetchData";
import { toast } from "react-toastify";

export const addJobs = createAsyncThunk(
  "add/job",
  async (formData, thunkApi) => {
    try {
      const res = await FetchData.post("/jobs",formData);
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

    const {page} = thunkApi.getState().jobs
    const {search,sort,jobType,status} = formData
    let url = `/jobs?sort=${sort}&jobType=${jobType}&status=${status}&page=${page}`
if(search){
  url =url+ `&search=${search}`
}
    try {
      const res = await FetchData.get(url);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    isLoading: false,
    isEditing: false,
    status: ["all","pending", "interview", "declined"],
    jobType: ["all","full-time", "part-time", "remote", "internship"],
    sort: ["latest", "oldest", "a-z", "z-a"],
    page:1,
    resJob:'',
  },

reducers:{
changePage:(state,{payload})=>{
  console.log(payload,'change');
  state.page = payload;
 
}
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
      }).addCase(showJobs.pending, (state)=>{
        state.isLoading = true;
      }).addCase(showJobs.fulfilled, (state, { payload })=>{
        state.isLoading = false;
        state.resJob= payload;
      }).addCase(showJobs.rejected, (state,{payload}) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const {changePage} = jobSlice.actions;

export default jobSlice.reducer;
