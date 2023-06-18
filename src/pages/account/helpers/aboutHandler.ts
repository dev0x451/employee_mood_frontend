import { ChangeEvent } from "react";

export const aboutHandler = (
  e: ChangeEvent<HTMLTextAreaElement>,
  handleAbout: (arg: string) => void,
  handleAboutError: (arg: string) => void
): void => {
  const target = e.target as HTMLTextAreaElement;
  handleAbout(target.value);
  if (target.value.length < 2) {
    handleAboutError("Минимальное количество символов: 2");
  } else if (target.value.length > 256) {
    handleAboutError("Максимальное количество символов: 256");
  } else {
    handleAboutError("");
  }
};
