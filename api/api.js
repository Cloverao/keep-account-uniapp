import { apiRequest } from "../common/request";

export const userLogin = (query) => {
  return apiRequest({
    url: "/loginByPass",
    method: "POST",
    query: query,
  });
};
