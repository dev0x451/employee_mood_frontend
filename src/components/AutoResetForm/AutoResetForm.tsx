import React from "react";
import { useFormikContext } from "formik";

interface Props {
  addPopupVisible: boolean;
}
export const AutoResetForm: React.FC<Props> = ({ addPopupVisible }) => {
  const { resetForm } = useFormikContext();
  React.useEffect(() => {
    if (addPopupVisible) {
      resetForm();
    }
  }, [addPopupVisible]);
  return null;
};
