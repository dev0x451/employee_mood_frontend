import axios from "axios";
import { MyFormValues } from "@/types";

const BASE_URL = "https://em-dev.usolcev.com/api/v1";

export const loginUser = (values: MyFormValues) => {
  return axios.post(`${BASE_URL}/auth/jwt/create`, values);
};

export const registerUser = (values: any) => {
  return axios.post(`${BASE_URL}/users/register`, values);
};

export const checkToken = (token: string) => {
  return axios.post(`${BASE_URL}/auth/jwt/verify`, { token });
};
