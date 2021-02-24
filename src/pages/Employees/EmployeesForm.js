import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React from "react";
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
  const { values, setValues, handleInputChange } = useForm(initialFValues);
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
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="male" control={<Radio />} label="male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}
