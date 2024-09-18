import { BASE_URL } from "@/constants/url";
import { IBurgerIngridientsResponse } from "@/services/burger-ingridients/types";
import { TUser } from "@/services/user/types";
import { IOrderResponse, IServerRefreshTokenResponse, TApiResponse } from "@/types/api-response";

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
    method: "POST",
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

const postOrder = (ingredientsIds: Array<string>) => {
  return request<TApiResponse<IOrderResponse>>("orders", {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      ingredients: ingredientsIds
    })
  });
};

const getUser = async (): Promise<TUser> => {
  const request: Promise<TUser> = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "123", email: "123" });
    }, 1000);
  });

  try {
    return await request;
  } catch (error) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    throw error;
  }
};

const login = (): Promise<TUser> =>
  new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("accessToken", "test-token");
      localStorage.setItem("refreshToken", "test-refresh-token");
      resolve({
        name: "123",
        email: "123"
      });
    }, 1000);
  });

const logout = (): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      resolve();
    }, 1000);
  });

export const api = {
  getIngridients,
  postOrder,
  refreshToken,
  login,
  logout,
  getUser
};
