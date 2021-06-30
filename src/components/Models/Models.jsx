import React from "react";
import { Grid, Box } from "@material-ui/core";

import Model1 from "../../assets/model1.jpeg";
import Model2 from "../../assets/model2.jpeg";
import Model3 from "../../assets/model3.jpeg";

import Model from "./Model/Model";

const Models = () => {
  return (
    <>
      <Box my={12}>
        <Grid container justify="center" spacing={4}>
          <Model img={Model1} color="#2c3e50" />
          <Model img={Model2} color="#f39c12" />
          <Model img={Model3} color="#EE5A24" />
        </Grid>
      </Box>
    </>
  );
};

export default Models;
