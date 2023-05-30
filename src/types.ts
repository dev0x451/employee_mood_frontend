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
