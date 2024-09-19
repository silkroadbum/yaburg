import { TUser } from "@/services/user/types";

export interface IApiResponseBase {
  success: boolean;
}

export type TApiResponse<T> = IApiResponseBase & T;

export interface IServerRefreshTokenResponse {
  refreshToken: string;
  accessToken: string;
}

export interface IOrderResponse {
  name: string;
  order: {
    number: number;
  };
}

export interface IServerUserResponse {
  user: TUser;
}

export interface ILoginUserResponse extends IServerRefreshTokenResponse, IServerUserResponse {}

export interface ILogoutResponse {
  message: string;
}

export enum HTTPMethodEnum {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH"
}

export interface IRegisterRequest extends TUser {
  password: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IResetPasswordRequest {
  password: string;
  token: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
