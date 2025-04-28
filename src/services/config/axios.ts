import axios, { type AxiosInstance } from "axios";
import { API_URL } from "@/constants";
import { ServiceError } from "../error";

const defaultHeaders = {
  "Content-Type": "application/json",
  LANG: "vi",
  Timezone: "Asia/Saigon",
} as const;

const api: AxiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: defaultHeaders,
});

api.interceptors.response.use((response) => {
  if (response?.data?.error_code) {
    let message = "Unknown error";
    if (typeof response?.data?.message === "string") {
      message = response?.data?.message;
    } else if (Array.isArray(response?.data?.message)) {
      message = response?.data?.message.join(", ");
    }
    throw new ServiceError(message);
  }

  return response.data;
});

function setupBearerAuthorization(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export { api, setupBearerAuthorization };

export default api;
