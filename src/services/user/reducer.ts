import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState, TUser } from "./types";
import { login, logout, register } from "./actions";

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
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuthChecked = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuthChecked = true;
      });
  }
});

export const { setIsAuthChecked, setUser } = userSlice.actions;
