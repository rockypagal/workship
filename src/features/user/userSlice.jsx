import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:'user',
    initialState:{
        name:'umang'      
    }
})



export default userSlice.reducer;