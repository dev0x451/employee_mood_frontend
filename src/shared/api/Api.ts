import axios from "axios";
import {EventInterface, SubmitArguments, UserConditionForSend, UserInfo} from "@/types";
import {BASE_URL_REQUEST, BASE_URL_WSS} from "../constants";

// const BASE_URL = "https://em-dev.usolcev.com/api/v1";

export const getUser = () => {
  return axios.get(`${BASE_URL_REQUEST}/users/current_user`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const getEmployeeInfo = (userId: string | undefined) => {
  return axios.get(`${BASE_URL_REQUEST}/users/${userId}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const changeUserInfo = (userInfo: UserInfo, toDeletePhoto: string) => {
  return axios.patch(
    `${BASE_URL_REQUEST}/users/current_user${toDeletePhoto}`,
    userInfo,
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

export const getHobbies = (word: string) => {
  return axios.get(`${BASE_URL_REQUEST}/hobbies?search=${word}`);
};

export const getEmployeeTestResults = (userId: string | undefined) => {
  return axios.get(
    `${BASE_URL_REQUEST}/metrics/surveys/results?employee=${userId}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
};

export const getAllTestsResults = () => {
  return axios.get(
    `${BASE_URL_REQUEST}/metrics/surveys/results/?my_results=true`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
};

export const sendTestResults = (results: SubmitArguments) => {
  return axios.post(
    `${BASE_URL_REQUEST}/metrics/surveys/results`,
    {
      survey: results.survey,
      results: results.results,
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

export const connectToWebSocketNotifications = () => {
  return axios.get(`${BASE_URL_WSS}/notifications?2`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const getEvents = () => {
  return axios.get(`${BASE_URL_REQUEST}/events/`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const checkTestNotificationIsActive = (id: string) => {
  return axios.get(`${BASE_URL_REQUEST}/notifications?incident_id=${id}&incident_type=Опрос`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const postEvent = (event: EventInterface) => {
  return axios.post(`${BASE_URL_REQUEST}/events/`,
    {
      name: event.name,
      for_all: true,
      text: event.text,
      start_time: event.start_time,
      end_time: event.end_time,
      // "departments": [
      //   0
      // ],
      // "employees": [
      //   0
      // ]
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    }
  );
};
export const postEventLike = (event: number) => {
  return axios.post(`${BASE_URL_REQUEST}/socials/likes/`,
    {
      "event": event
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    }
  );
};
export const deleteEventLike = (id: number) => {
  return axios.delete(`${BASE_URL_REQUEST}/socials/likes/${id}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    }
  );
};
export const makeEventNotificationUnactive = (id: string) => {
  return axios.get(`${BASE_URL_REQUEST}/notifications/${id}/viewed`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const getMentalStates = () => {
  return axios.get(`${BASE_URL_REQUEST}/metrics/mental_states`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const getMeetingsInfo = (id: string | undefined) => {
  return axios.get(`${BASE_URL_REQUEST}/meeting_results?employee=${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const sendMeetingInfo = (userId: string, formattedDate: string, comment: string, level: number) => {
  return axios.post(
    `${BASE_URL_REQUEST}/meeting_results`, {
      date: formattedDate,
      comment: comment,
      employee: userId,
      mental_state: level
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
};

export const getAllUserConditions = () => {
  return axios.get(`${BASE_URL_REQUEST}/metrics/conditions/?my_conditions=true&limit=365`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const sendUserCondition = (conditions: UserConditionForSend) => {
  return axios.post(`${BASE_URL_REQUEST}/metrics/conditions/`,
    // return axios.post(`${BASE_URL_REQUEST}/metrics/conditions/?infinity_freq=true`,
    {
      mood: conditions.mood,
      note: conditions.note,
      date: conditions.date,
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    }
  );
};

//id пользователя currentUser
export const getUserBurnoutsGraph = (id: number) => {
  return axios.get(`${BASE_URL_REQUEST}/metrics/burnouts/graph_data/?employee=${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const postUsefulLike = (event: number) => {
  return axios.post(`${BASE_URL_REQUEST}/socials/likes/`,
    {
      "event": event
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    }
  );
};
export const deleteUsefulLike = (id: number) => {
  return axios.delete(`${BASE_URL_REQUEST}/socials/likes/${id}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    }
  );
};
