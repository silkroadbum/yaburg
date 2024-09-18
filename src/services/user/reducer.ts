import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState, TUser } from "./types";
import { login, logout } from "./actions";

const initialState: IUserState = {
  user: null,
  isAuthChecked: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action: PayloadAction<TUser | null>) => {
      state.user = action.payload;
    }
  },
  selectors: {
    getIsAuthChecked: (state) => state.isAuthChecked,
    getUser: (state) => state.user
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  }
});

export const { setIsAuthChecked, setUser } = userSlice.actions;
export const { getIsAuthChecked, getUser } = userSlice.selectors;
