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
  avatar?: string;
  name: string;
  position: string;
  // colorball: string;
  state: string;
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

export interface RecordInterface {
  description: string;
  date: string;
  state: string;
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
  "completion_date": string,
  "employee": number,
  "id": number,
  "next_attempt_date": string,
  "result": string,
  "survey": number
}

