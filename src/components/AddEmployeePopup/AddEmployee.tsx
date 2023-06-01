import React from "react";
import { addEmailSchema } from "@/schemas/validationSchema";
import { Formik } from "formik";
import { AddEmployeePopup } from "@/components/AddEmployeeForm/AddEmployeePopup";
interface Props {
  addPopupVisible: boolean;
  closeAddPopup: () => void;
}
export const AddEmployee: React.FC<Props> = ({
  addPopupVisible,
  closeAddPopup,
}) => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
      validationSchema={addEmailSchema}
    >
      <AddEmployeePopup
        addPopupVisible={addPopupVisible}
        closeAddPopup={closeAddPopup}
      />
    </Formik>
  );
};
