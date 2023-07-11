import styles from "./info.module.scss";
import {BASE_URL_MEDIA} from "@/shared/constants.ts";
import {UserDepartment, UserPosition} from "@/types.ts";
import {ReactElement} from "react";

interface Props {
  avatar: string | null;
  department: null | UserDepartment;
  email: string;
  firstName: string;
  lastName: string;
  phone: number;
  position: UserPosition | null;
}

export const Info = ({avatar, firstName, lastName, department, position, phone, email}: Props): ReactElement => {

  return (
    <div className={styles.info}>
      {avatar
        ?
        <img className={styles.employeePhoto} src={`${BASE_URL_MEDIA}${avatar}`} alt="фотография сотрудника"/>
        :
        <div className={styles.employeeNoPhoto}>{`${firstName[0]}${lastName[0]}`}</div>
      }
      <h3 className={styles.employeeTitle}>{`${firstName} ${lastName}`}</h3>
      <p className={styles.employeePosition}>{department !== null && department.name}</p>
      <p className={styles.employeePosition}>{position !== null && position.name}</p>
      {phone && <p className={styles.employeeContacts}>{phone}</p>}
      <p className={styles.employeeContacts}>{email}</p>
    </div>
  );
};
