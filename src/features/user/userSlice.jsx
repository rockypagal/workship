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

export const updateUser = createAsyncThunk(
  "update/User",
  async (formData, thunkApi) => {
    try {
      const res = await FetchData.patch("/auth/updateUser", formData);
      return res.data;
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
    isUser: userLocalData ? true : false,
    isSidebarOpen: true,
    navWidth: "auto",
  },
  reducers: {
    logOut: (state) => {
      state.isUser = false;
      logOutUser();
    },
    checkIsMember: (state) => {
      state.isMember = !state.isMember;
    },
    manageSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    changeNavSize: (state, { payload }) => {
      state.navWidth = state.isSidebarOpen ? payload - 270 : payload - 100;
    },
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
        state.name = payload.name;
        state.email = payload.email;
        state.lastName = payload.lastName;
        state.token = payload.token;
        state.location = payload.location;
        toast.success(`Welcome ${payload.name}`);
      })
      .addCase(RegisterUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        setUserInStorage(payload);
        state.isUser = true;
        state.name = payload.name;
        state.email = payload.email;
        state.lastName = payload.lastName;
        state.token = payload.token;
        state.location = payload.location;
        console.log(payload);
        toast.success(`Welcome ${payload.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        let {user} = payload
        setUserInStorage(user);
        state.name = user.name;
        state.email = user.email;
        state.lastName = user.lastName;
        state.token = user.token;
        state.location = user.location;
        console.log(payload.user);
        toast.success('User updated successfully')
      }).addCase(updateUser.rejected, (state,{payload}) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { logOut, checkIsMember, manageSidebar, changeNavSize } =
  userSlice.actions;

export default userSlice.reducer;
