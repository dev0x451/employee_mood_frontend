import axios from "axios";
import { MyFormValues } from "@/types";

const BASE_URL = "https://em-dev.usolcev.com/api/v1";

export const loginUser = (values: MyFormValues) => {
  return axios.post(`${BASE_URL}/auth/jwt/create`, values);
};

export const checkToken = (token: string) => {
  return axios.post(`${BASE_URL}/auth/jwt/verify`, { token });
};
