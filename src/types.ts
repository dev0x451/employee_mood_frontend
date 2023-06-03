export interface ArticleInterface {
  type: string;
  title: string;
  length: string;
  banner: string;
}

type Department = {
  department: number;
};

export interface EmployeeInterface {
  id: number;
  avatar?: string;
  first_name: string;
  last_name: string;
  position: {name:string};
  // colorball: string;
  mental_state: string;
}

export interface SelectOption {
  label: string;
  value: string;
  isDisabled?: boolean;
  departments: Department[];
}

export interface MyFormValues {
  password: string;
  email: string;
}

export interface RegisterFormValues {
  password: string;
  confirmPassword: string;
  lastName: string;
  firstName: string;
  department: string;
  position: string;
}

export type CallbackFunction = () => void;

export interface Image {
  src: string;
  title: string;
  id: string;
}

export interface Question {
  text: string
}

export interface TestInterface {
  author: number;
  creation_date: string;
  department: number;
  description: string;
  frequency: number;
  id: number;
  is_active: boolean;
  questions: Question[];
  title: string;
}

export interface TestResult {
  positive_value: number,
  negative_value: number,
  survey: number,
}

export interface ExpressDiagnoseResponse {
  completion_date: string,
  employee: number,
  id: number,
  next_attempt_date: string,
  result: string,
  survey: number
}

export interface UserDepartment {
  id: number,
  name: string,
  description: string,
}

export interface UserPosition {
  id: number,
  name: string,
  chief_position: boolean,
  departments: number[]
}

export interface UserHobby {
  id: number,
  name: string
}

export interface UserLatestCondition {
  id: number,
  mood: number,
  note: string| null,
  date: string,
  employee: number
}

export interface User {
  about: string | null,
  avatar: string| null,
  date_joined: string,
  department: null | UserDepartment,
  email: string,
  first_name: string,
  hobbies: null | UserHobby[],
  id: number,
  last_name: string,
  latest_condition: null | UserLatestCondition,
  mental_state: string,
  patronymic: string | null,
  phone: number,
  position: null | UserPosition,
  role: string
}
