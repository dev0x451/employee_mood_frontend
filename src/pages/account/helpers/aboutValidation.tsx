import React from "react";

export const aboutHandler = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  test1: any,
  test2: any
): void => {
  const target = e.target as HTMLTextAreaElement;
  test1(target.value);
  if (target.value.length < 2 && target.value.length) {
    test2("Минимальное количество символов: 2");
  } else if (target.value.length > 256) {
    test2("Максимальное количество символов: 256");
  } else {
    test2("");
  }
};
