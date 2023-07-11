import React from "react";
import { useFormikContext } from "formik";
import { useAppSelector } from "@/store/hooks";
import * as alertSuccessActions from "@/store/reducers/alertSuccess/alertSuccessReducer";

interface Props {
  addPopupVisible: boolean;
}
export const AutoResetForm: React.FC<Props> = ({ addPopupVisible }) => {
  const successMessage = useAppSelector(
    alertSuccessActions.selectSuccessMessage
  );
  const { resetForm } = useFormikContext();
  React.useEffect(() => {
    if (successMessage || addPopupVisible) {
      resetForm();
    }
  }, [addPopupVisible]);
  return null;
};
