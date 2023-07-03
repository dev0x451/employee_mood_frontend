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
  avatar?: string | null;
  avatar_full?: string | null;
  first_name: string;
  last_name: string;
  position: { name: string };
  // colorball: string;
  mental_state: UserMentalState;
}
export interface EventInterface {
  author?: {id: number, first_name: string, last_name: string };
  created?: string;
  end_time: Date;
  start_time: Date;
  id?: number;
  name: string;
  text: string;
  liked?: {id?: number }
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

export type CallbackFunction = () => void;

export interface Image {
  src: string;
  title: string;
  id: string;
}

export interface Question {
  id: string;
  text: string;
  number: number;
}

export interface TestAuthor {
  id: number;
  first_name: string;
  last_name: string;
}

export interface TestVariantAswer {
  text: string;
  value: number;
}

export interface TestInterface {
  creation_date: string;
  type: string;
  department: number;
  description: string;
  questions_quantity: number;
  frequency: number;
  id: number;
  is_active: boolean;
  questions: Question[];
  title: string;
  text: string;
  author: TestAuthor | null;
  variants: TestVariantAswer[];
}

export interface AnswerResult {
  question_id: number;
  variant_value: number;
}

export interface TestResults {
  results: AnswerResult[]
  survey: number
}

export interface SubmitArguments {
  results: AnswerResult[];
  survey: number;
}

export interface ExpressDiagnoseEmployee {
  id: number;
  first_name: string;
  last_name: string;
}

export interface ExpressDiagnoseSurvey {
  id: number;
  title: string;
  type: string;
  frequency: number;
  creation_date: string;
  questions_quantity: number;
  description: string;
  text: string;
  author: TestAuthor | number;
}

export interface ExpressDiagnoseMentalState {
  name: string;
  description: string;
  message: string;
  level: number;
}

export interface Graph {
  title: string,
  text: string,
  size: string,
  color: string,
  value: number,
  min_value: number,
  max_value: number
}
export interface ExpressDiagnoseSummaryGraphs {
  graphs: Graph[]
}

export interface ExpressDiagnoseResponse {
  id: number;
  employee: ExpressDiagnoseEmployee;
  survey: ExpressDiagnoseSurvey;
  mental_state: ExpressDiagnoseMentalState,
  summary: null | ExpressDiagnoseSummaryGraphs,
  results: AnswerResult[]
  completion_date: string;
  next_attempt_date: string;
}

export interface UserDepartment {
  id: number;
  name: string;
  description: string;
}

export interface UserPosition {
  id: number;
  name: string;
  chief_position: boolean;
  departments: number[];
}

export interface UserHobby {
  id: number;
  name: string;
}

export interface UserLatestCondition {
  id: number;
  mood: number;
  note: string | null;
  date: string;
  employee: number;
}

export interface UserMentalState {
  id: number | string;
  name: string;
  description: string;
  level: number;
}

export interface UserPosition {
  id: number;
  name: string;
  chief_position: boolean;
}

export interface User {
  about: string | null;
  avatar: string | null;
  date_joined: string;
  department: null | UserDepartment;
  email: string;
  first_name: string;
  hobbies: null | UserHobby[];
  id: number;
  last_name: string;
  latest_condition: null | UserLatestCondition;
  mental_state: null | UserMentalState;
  patronymic: string | null;
  phone: number;
  position: UserPosition | null;
  role: string;
}

export interface Hobby {
  hobby: number;
}

export interface UserInfo {
  avatar?: string | null;
  hobbies?: Hobby[];
  about: string;
}

export interface jwtTypes {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
}


export interface Card {
  id?: number;
  category: Category[];
  author?: string;
  title: string;
  preview_image: string;
  text: string;
  created: string;
  isLiked?: boolean;
}

export interface Category {
  id: number,
  name: string,
  slug: string,
  description: string;
}

export interface Meeting {
  id?: number;
  date: string;
  name: string;
  level: number;
  comment: string;
}

export interface WebSocketActiveEvent {
  id: number,
  incident_type: string,
  incident_id: number
}

export interface WebSocketNotifications {
  notifications: WebSocketActiveEvent[]
}

export interface WebSocketMessage {
  message: WebSocketNotifications | null;
}

export interface MeetingInfo {
  userId: string,
  formattedDate: string,
  comment: string,
  level: number;
}

export interface MeetingInterface {
  //id: number | undefined,
  comment: string,
  date: string,
  employee?: EmployeeInterface,
  organizer?: EmployeeInterface,
  mental_state: UserMentalState
}

export interface UserConditionForSend {
  mood: number,
  note?: string | null,
  date: string,
}

export interface UserConditionRecieved {
  id: number,
  mood: number,
  note?: string | null,
  date: string,
  employee: number
}
