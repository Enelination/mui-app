import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, value, label, onChange } = props;
  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}
