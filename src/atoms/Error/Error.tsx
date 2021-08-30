import React from "react";

import { ErrorMessage } from "formik";

interface ErrorProps {
  text: string;
}
export const Error = ({ text }: ErrorProps) => {
  return <div className="text-red-600 mt-1 text-xs">{text}</div>;
};
export const FormikError = ({ name }: { name: string }) => {
  return (
    <ErrorMessage name={name}>{(error) => <Error text={error} />}</ErrorMessage>
  );
};
