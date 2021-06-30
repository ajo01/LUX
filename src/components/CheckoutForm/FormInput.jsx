import React from "react";
import { TextField } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field }) => (
        <TextField {...field} label={label} fullWidth required />
      )}
      control={control}
      name={name}
    />
  );
};

export default FormInput;
