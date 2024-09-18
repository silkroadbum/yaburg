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

export type ServerUserResponse = IServerRefreshTokenResponse & {
  user: TUser;
};
