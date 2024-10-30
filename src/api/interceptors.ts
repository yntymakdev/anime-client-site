import axios, { type CreateAxiosDefaults } from "axios";
import { SERVER_URL } from "@/config/api.config";
import { getAccessToken } from "@/services/auth/auth-token.service";
import { config } from "process";
const options: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);
axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (config && config.headers && accessToken)
    config.headers.Authorization = `Bearer${accessToken}`;
  return config;
});
