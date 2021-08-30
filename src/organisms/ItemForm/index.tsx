import React, { FC } from "react";

import * as yup from "yup";

import { FormikInput } from "molecules/FormikInput";
import { Formik, FormikHelpers, Form } from "formik";
import { ListItemType } from "typings/listItem";

const validationSchema = yup.object().shape({
  desc: yup.string().required("required"),
  name: yup.string().required("required"),
  price: yup.string().required("required"),
});

export type ItemFormProps = {
  onSubmit: (values: ListItemType, formikHelpers?: FormikHelpers<any>) => void;
  initialValues: ListItemType;
};

export const ItemForm: FC<ItemFormProps> = ({ initialValues, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="space-y-4 ">
            <FormikInput type="text" name="name" label="Name" />

            <FormikInput type="text" name="desc" label="Description" />
            <FormikInput type="number" name="price" label="Price" />

            <div className={`flex pt-5 justify-end `}>
              <button
                type="submit"
                className="flex justify-center items-center  text-xs font-medium rounded shadow-sm  hover:border-primary border-2 font-bold px-4  py-2  rounded-md hover:font-bold  focus:outline-none text-sm px-4 px-16  py-3 font-bold bg-primary text-white "
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
