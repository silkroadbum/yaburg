import { BASE_URL } from "@/constants/url";
import { IBurgerIngridientsResponse } from "@/services/burger-ingridients/types";
import { TUser } from "@/services/user/types";
import {
  HTTPMethodEnum,
  IForgotPasswordRequest,
  ILoginRequest,
  ILoginUserResponse,
  ILogoutResponse,
  IOrderResponse,
  IRegisterRequest,
  IResetPasswordRequest,
  IServerRefreshTokenResponse,
  IServerUserResponse,
  TApiResponse
} from "@/types/api-response";

const apiConfig = {
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
};

function checkResponse<T>(res: Response): Promise<T> {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

function request<T>(endpoint: string, options: RequestInit): Promise<T> {
  return fetch(`${apiConfig.baseUrl}${endpoint}`, options).then((res) => checkResponse<T>(res));
}

export const refreshToken = () => {
  return request<TApiResponse<IServerRefreshTokenResponse>>("auth/token", {
    method: HTTPMethodEnum.POST,
    headers: apiConfig.headers,
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken")
    })
  }).then((refreshData) => {
    if (!refreshData.success) {
      return Promise.reject(refreshData);
    }
    localStorage.setItem("refreshToken", refreshData.refreshToken);
    localStorage.setItem("accessToken", refreshData.accessToken);
    return refreshData;
  });
};

export const fetchWithRefresh = async <T>(url: string, options: RequestInit) => {
  try {
    return await request<T>(url, options);
  } catch (err) {
    if (err instanceof Error && err.message === "jwt expired") {
      const refreshData = await refreshToken();
      options.headers = {
        ...options.headers,
        authorization: refreshData.accessToken
      };
      return await request<T>(url, options);
    } else {
      return Promise.reject(err);
    }
  }
};

const getIngridients = () => {
  return request<TApiResponse<IBurgerIngridientsResponse>>("ingredients", {
    headers: apiConfig.headers
  });
};

const postOrder = (data: Array<string>) => {
  return fetchWithRefresh<TApiResponse<IOrderResponse>>("orders", {
    method: HTTPMethodEnum.POST,
    headers: { ...apiConfig.headers, authorization: localStorage.getItem("accessToken")! },
    body: JSON.stringify({
      ingredients: data
    })
  });
};

const getUser = async (): Promise<TUser> => {
  return fetchWithRefresh<TApiResponse<IServerUserResponse>>("auth/user", {
    headers: { ...apiConfig.headers, authorization: localStorage.getItem("accessToken")! }
  }).then((res) => (res.success ? res.user : Promise.reject(res)));
};

const login = (formData: ILoginRequest) => {
  return request<TApiResponse<ILoginUserResponse>>("auth/login", {
    method: HTTPMethodEnum.POST,
    headers: apiConfig.headers,
    body: JSON.stringify(formData)
  }).then((res) => {
    localStorage.setItem("accessToken", res.accessToken);
    localStorage.setItem("refreshToken", res.refreshToken);
    return res.user;
  });
};

const logout = () => {
  const token = localStorage.getItem("refreshToken");
  if (token) {
    return request<TApiResponse<ILogoutResponse>>("auth/logout", {
      method: HTTPMethodEnum.POST,
      headers: apiConfig.headers,
      body: JSON.stringify({ token })
    }).then(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    });
  } else {
    Promise.reject();
  }
};

const register = (formData: IRegisterRequest) => {
  return request<TApiResponse<ILoginUserResponse>>("auth/register", {
    method: HTTPMethodEnum.POST,
    headers: apiConfig.headers,
    body: JSON.stringify(formData)
  }).then((res) => {
    localStorage.setItem("accessToken", res.accessToken);
    localStorage.setItem("refreshToken", res.refreshToken);
    return res.user;
  });
};

const forgotPassword = (formData: IForgotPasswordRequest) => {
  return request<TApiResponse<ILogoutResponse>>("password-reset", {
    method: HTTPMethodEnum.POST,
    headers: apiConfig.headers,
    body: JSON.stringify(formData)
  });
};

export const resetPassword = (formData: IResetPasswordRequest) => {
  return request<TApiResponse<ILogoutResponse>>("password-reset/reset", {
    method: HTTPMethodEnum.POST,
    headers: apiConfig.headers,
    body: JSON.stringify(formData)
  });
};

export const updateUser = (formData: IRegisterRequest) => {
  return fetchWithRefresh<TApiResponse<IServerUserResponse>>("auth/user", {
    method: HTTPMethodEnum.PATCH,
    headers: { ...apiConfig.headers, authorization: localStorage.getItem("accessToken")! },
    body: JSON.stringify(formData)
  }).then((res) => res.user);
};

export const api = {
  getIngridients,
  postOrder,
  refreshToken,
  login,
  logout,
  getUser,
  register,
  forgotPassword,
  resetPassword,
  updateUser
};
