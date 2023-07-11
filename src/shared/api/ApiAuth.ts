import axios from "axios";
import { MyFormValues } from "@/types";
import { FormikValues } from "formik";

const BASE_URL = "https://em-dev.usolcev.com/api/v1";

export const loginUser = (values: MyFormValues) => {
  return axios.post(`${BASE_URL}/auth/jwt/create`, values);
};

export const registerUser = (values: FormikValues, invite_code: string) => {
  return axios.post(`${BASE_URL}/users/register`, {
    invite_code,
    first_name: values.firstName,
    last_name: values.lastName,
    department: values.department,
    position: values.position,
    password: values.password,
    password_confirm: values.confirmPassword,
  });
};

export const sendResetCode = (email: string) => {
  return axios.post(`${BASE_URL}/users/password_reset`, {
    email: email,
  });
};

export const resetPassword = (values: FormikValues, resetCode: string) => {
  return axios.post(`${BASE_URL}/users/password_reset_confirm`, {
    reset_code: resetCode,
    password: values.password,
    password_confirm: values.confirmPassword,
  });
};

export const checkToken = (token: any) => {
  return axios.post(`${BASE_URL}/auth/jwt/verify`, { token });
};

export const refreshToken = (token: string) => {
  return axios.post(`${BASE_URL}/auth/jwt/refresh`, { refresh: token });
};
