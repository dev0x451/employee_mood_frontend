import React from "react";
import { useFormikContext } from "formik";

interface Props {
  addPopupVisible: boolean;
  success: string;
}
export const AutoResetForm: React.FC<Props> = ({
  addPopupVisible,
  success,
}) => {
  const { resetForm } = useFormikContext();
  React.useEffect(() => {
    if (success || addPopupVisible) {
      resetForm();
    }
  }, [addPopupVisible]);
  return null;
};
