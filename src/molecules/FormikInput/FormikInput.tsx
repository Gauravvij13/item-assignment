import React from "react";
import { useField } from "formik";
import { InputField } from "atoms/InputField";

import { FormikError } from "atoms/Error";

interface IProps {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  validation?: boolean;

  valueOfLabel?: string;
}

export const FormikInput = ({ ...props }: IProps) => {
  const [field, meta] = useField(props.name);
  const { touched, error } = { ...meta };
  return (
    <div className="w-full">
      {props.label && (
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-primary mb-2"
        >
          <div>{props.label} </div>
        </label>
      )}
      <div className="mt-1 relative">
        <InputField
          touched={touched}
          error={error}
          {...field}
          {...props}
          validation={props.validation}
        />
      </div>

      <FormikError name={props?.name} />
    </div>
  );
};
