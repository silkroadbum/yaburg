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

function request(endpoint: string, options: RequestInit) {
  return fetch(`${apiConfig.baseUrl}/${endpoint}`, options).then(getResponse);
}

export const getIngridients = () => {
  return request("ingredients", {
    headers: apiConfig.headers
  });
};

export const postOrder = (ingredientsIds: Array<string>) => {
  return request("orders", {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      ingredients: ingredientsIds
    })
  });
};
