import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm, Form } from "../../components/useForm";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: "",
  isPermanent: false,
};

export default function EmployeesForm() {
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            name="fullName"
            label="full name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  );
}
