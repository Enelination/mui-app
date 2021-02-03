import React from "react";
import EmployeesForm from "./EmployeesForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
  },
}));

export default function Employees() {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form Design"
        icon={<PeopleOutlineIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeesForm />
      </Paper>
    </>
  );
}
