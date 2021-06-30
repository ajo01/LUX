import React from "react";
import { Paper, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Model = ({ img }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.paper} variant="outline">
        <img className={classes.media} src={img} alt="models"></img>
        <div className={classes.overlay}>overlay text</div>
      </Paper>
    </Grid>
  );
};

export default Model;
