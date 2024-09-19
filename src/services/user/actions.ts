import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils/api.ts";
import { setIsAuthChecked, setUser } from "./reducer";
import { IForgotPasswordRequest, ILoginRequest, IRegisterRequest, IResetPasswordRequest } from "@/types/api-response";

export const login = createAsyncThunk("user/login", async (formData: ILoginRequest) => api.login(formData));

export const logout = createAsyncThunk("user/logout", async () => api.logout());

export const register = createAsyncThunk("user/register", async (formData: IRegisterRequest) => api.register(formData));

export const forgotPassword = createAsyncThunk("user/forgotPassword", async (formData: IForgotPasswordRequest) =>
  api.forgotPassword(formData)
);

export const resetPassword = createAsyncThunk("user/resetPassword", async (formData: IResetPasswordRequest) =>
  api.resetPassword(formData)
);

export const checkUserAuth = createAsyncThunk("user/checkUserAuth", async (_, { dispatch }) => {
  if (localStorage.getItem("accessToken")) {
    api
      .getUser()
      .then((user) => dispatch(setUser(user)))
      .finally(() => dispatch(setIsAuthChecked(true)));
  } else {
    dispatch(setIsAuthChecked(true));
  }
});
