import axios from "axios";

const BASE_URL = "https://em-dev.usolcev.com/api/v1";

export const getUser = () => {
  return axios.get(`${BASE_URL}/users/current_user`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const getDepartments = () => {
  return axios.get(`${BASE_URL}/departments`, {
    params: {
      invite_code:
        "NzhlYjVlZDYtMWZkYy00NzVhLWIzZDItNmU2ODUxNzk1N2M5TVGxITGXfGCuJ3+P6dqLOMfQ7Qd+XFPFGts7T3obPSc=",
    },
  });
};

export const getPositions = () => {
  return axios.get(`${BASE_URL}/positions`, {
    params: {
      invite_code:
        "NzhlYjVlZDYtMWZkYy00NzVhLWIzZDItNmU2ODUxNzk1N2M5TVGxITGXfGCuJ3+P6dqLOMfQ7Qd+XFPFGts7T3obPSc=",
    },
  });
};
