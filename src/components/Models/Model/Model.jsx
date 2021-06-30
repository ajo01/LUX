import React, { useState } from "react";
import { Paper, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Model = ({ img }) => {
  const classes = useStyles();

  const [focus, setFocus] = useState(false);

  const handleClick = () => {
    setFocus(true);
  };

  return (
    <Grid item>
      <Paper className={classes.paper} variant="outline" onClick={handleClick}>
        <img className={classes.media} src={img} alt="models"></img>
        {focus && (
          <div className={classes.overlay}>
            <div className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tellus nisi, semper quis euismod eget, iaculis non magna. Nunc ut
              pulvinar dolor, vel fermentum arcu. Vivamus dignissim elit sit
              amet ipsum blandit ornare. Suspendisse potenti. Pellentesque sed
              orci quis ante pharetra accumsan ac ultricies nulla. Mauris
              maximus pellentesque eros, in euismod lectus gravida semper.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </div>
          </div>
        )}
      </Paper>
    </Grid>
  );
};

export default Model;
