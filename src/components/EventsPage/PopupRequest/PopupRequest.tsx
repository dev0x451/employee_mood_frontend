// import { AddEmployeeForm } from "@/components/AddEmployeeForm/AddEmployeeForm";
// import { EventInterface } from "@/types";

// import * as Api from "@/shared/api/Api";


import styles from "./popupRequest.module.css";
import {ClosePopup} from "../img/closePopup";
import { IconstatusRequest } from "../img/IconStatusRequest";

// import React from "react";
// import {ClosePopup} from "../img/closePopup";
// import dash from "../img/dash.svg"
// import { useEscapeKeyEvent } from "@/shared/hooks/useEscapeKey";

interface Props {
  closePopupRequest: (e: any) => void;
  isRequest: boolean;
  // handleSendInviteCode: (email: string) => Promise<void>;
}

export const PopupRequest: React.FC<Props> = ({closePopupRequest, isRequest}) => {
  // export const PopupRequest = () => {


  return (
    <div className={styles.popupRequest}>
      <IconstatusRequest isRequest={isRequest
      } className={styles.popupRequest__icon}/>
      <p className={styles.popupRequest__text}>
        {isRequest ?
          "Мероприятие успешно добавлено" :
          "К сожалению, что-то пошло не так. Попробуйте добавить мероприятие позже"
        }

      </p>
      <button
        className={styles.popupRequest__buttonClose}
        onClick={closePopupRequest}
      >
        <ClosePopup />
      </button>
    </div>
  );
};

