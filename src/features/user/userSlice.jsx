import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchData from "../../utils/FetchData";
import {
  getUserFromStorage,
  setUserInStorage,
  logOutUser,
} from "../../utils/localStorage";
import { toast } from "react-toastify";

export const RegisterUser = createAsyncThunk(
  "register/user",
  async (formInfo, thunkApi) => {
    try {
      const res = await FetchData.post("/auth/testingRegister", formInfo);
      const data = res.data.user;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "login/User",
  async (formData, thunkApi) => {
    try {
      const res = await FetchData.post("/auth/login", formData);
      const data = res.data.user;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
const userLocalData = getUserFromStorage();
const userSlice = createSlice({
  name: "user",
  initialState: {
    ...userLocalData,
    isLoading: false,
    isMember: false,
    isUser: userLocalData? true: false,
  },
  reducers: {
    logOut: (state) => {
      state.isUser = false;
      logOutUser();
    },
    checkIsMember:(state) => {
      state.isMember = !state.isMember;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, { payload }) => {
        console.log(payload, "fulfilled");
        state.isLoading = false;
        setUserInStorage(payload);
        state.isUser = true;
        toast.success(`Welcome ${payload.name}`);
      })
      .addCase(RegisterUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        setUserInStorage(payload);
        state.isUser = true;
        toast.success(`Welcome ${payload.name}`);
      }).addCase(loginUser.rejected, (state, {payload}) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { logOut,checkIsMember } = userSlice.actions;

export default userSlice.reducer;
