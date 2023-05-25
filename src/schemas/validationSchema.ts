import * as yup from "yup";

//const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])$/;
const emailRules = /^([A-Za-z0-9\-_@.]+)$/;
const errorMessage = "Пожалуйста, проверьте, правильно ли указан адрес";
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .min(8, "Недостаточная длина email")
    .max(254, errorMessage)
    .matches(emailRules, {
      message: errorMessage,
    })
    .email(errorMessage)
    .required(errorMessage),
  password: yup.string().required(" "),
});
