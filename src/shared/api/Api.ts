import axios from "axios";

const BASE_URL = "https://em-dev.usolcev.com/api/v1";

export const getUser = () => {
  return axios.get(`${BASE_URL}/users/current_user`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const getDepartments = (invite_code: string) => {
  return axios.get(`${BASE_URL}/departments`, {
    params: {
      invite_code: invite_code,
    },
  });
};

export const getPositions = (invite_code: string) => {
  return axios.get(`${BASE_URL}/positions?limit=999`, {
    params: {
      invite_code: invite_code,
    },
  });
};

export const sendInviteCode = (email: string) => {
  return axios.post(
    `${BASE_URL}/users/send_invite`,
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
