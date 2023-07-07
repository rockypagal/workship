import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const jobSlice = createSlice({
    name: 'jobSlice',
    initialState:{
        isLoading: false,
    }
})