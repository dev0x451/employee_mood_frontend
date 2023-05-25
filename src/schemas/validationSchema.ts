import * as yup from "yup";

//const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])$/;
const emailRules = /^([A-Za-z0-9\-_@.]+)$/;
const errorMessage = "Пожалуйста, проверьте, правильно ли указан адрес";
const minLengthError = "Минимальное количество символов: 8";
const maxLengthError = "Максимальное количество символов: 256";
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .min(8, minLengthError)
    .max(256, maxLengthError)
    .matches(emailRules, {
      message: errorMessage,
    })
    .email(errorMessage)
    .required(errorMessage),
  password: yup
    .string()
    .required(" ")
    .min(8, minLengthError)
    .max(256, maxLengthError),
});
