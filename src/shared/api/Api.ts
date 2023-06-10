import axios from "axios";
import { TestResult, UserInfo } from "@/types";
import { BASE_URL_REQUEST } from "../constants";

// const BASE_URL = "https://em-dev.usolcev.com/api/v1";

export const getUser = () => {
  return axios.get(`${BASE_URL_REQUEST}/users/current_user`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const changeUserInfo = (userInfo: UserInfo) => {
  return axios.patch(
    `${BASE_URL_REQUEST}/users/current_user`,
    { about: userInfo.about, avatar: userInfo.photoToSubmit },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
};

export const changeUserInfoOnlyAbout = (userInfo: UserInfo) => {
  return axios.patch(
    `${BASE_URL_REQUEST}/users/current_user`,
    { about: userInfo.about },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
};

export const getDepartments = (invite_code: string) => {
  return axios.get(`${BASE_URL_REQUEST}/departments`, {
    params: {
      invite_code: invite_code,
    },
  });
};

export const getPositions = (invite_code: string) => {
  return axios.get(`${BASE_URL_REQUEST}/positions?limit=999`, {
    params: {
      invite_code: invite_code,
    },
  });
};

export const getTestQuestions = (test: string | null) => {
  return axios.get(`${BASE_URL_REQUEST}/metrics/surveys/${test}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const getAllTestsResults = () => {
  return axios.get(`${BASE_URL_REQUEST}/metrics/results/?my_results=true`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const sendTestResults = (results: TestResult) => {
  return axios.post(
    `${BASE_URL_REQUEST}/metrics/results`,
    {
      positive_value: results.positive_value,
      negative_value: results.negative_value,
      survey: results.survey,
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
};

export const sendInviteCode = (email: string) => {
  return axios.post(
    `${BASE_URL_REQUEST}/users/send_invite`,
    {
      email: email,
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
};

export const getUsers = () => {
  return axios.get(`${BASE_URL_REQUEST}/users/?limit=100`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};
