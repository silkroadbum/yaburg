import { BASE_URL } from "@/constants/url";

const apiConfig = {
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
};

const getResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

export const getIngridients = () => {
  return fetch(`${apiConfig.baseUrl}/ingredients`, {
    headers: apiConfig.headers
  }).then(getResponse);
};
