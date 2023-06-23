import { UserHobby } from "@/types";
export const arrayEquals = (
  a: UserHobby[],
  b: UserHobby[] | null,
  checkEquality: (arg: boolean) => void
) => {
  if (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  ) {
    checkEquality(true);
  } else {
    checkEquality(false);
  }
};

export const getHobbiesId = (hobbies: UserHobby[]) => {
  const newHobbiesArr: any = [];
  hobbies.forEach((hobby) => {
    newHobbiesArr.push(hobby.id);
  });
  return newHobbiesArr;
};
