import { ChangeEvent } from "react";

export const aboutHandler = (
  e: ChangeEvent<HTMLTextAreaElement>,
  handleAbout: (arg: string) => void,
  handleAboutError: (arg: string) => void,
  handleDisabledButton: (arg: boolean) => void
): void => {
  const target = e.target as HTMLTextAreaElement;
  handleAbout(target.value);
  if (target.value.length < 2) {
    handleAboutError("Минимальное количество символов: 2");
    handleDisabledButton(true);
  } else if (target.value.length > 256) {
    handleAboutError("Максимальное количество символов: 256");
    handleDisabledButton(true);
  } else {
    handleAboutError("");
    handleDisabledButton(false);
  }
};
