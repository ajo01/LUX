import React, { useState } from "react";
import Products from "../Products/Products";
import ShoppingImg from "../../assets/header.jpeg";
import { Grid, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";
import Models from "../Models/Models";
import ModalView from "../ModalView/ModalView";

const Shopping = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Box mb={8}>
        <div className={classes.toolbar} />

        <Grid container justify="center" spacing={2}>
          <Typography
            className={classes.title}
            align="center"
            variant="h3"
            gutterBottom
          >
            LUX SHOP
          </Typography>
          <img src={ShoppingImg} alt="Landing img" width="85%" />

          <Models />
          <Products products={products} onAddToCart={onAddToCart} />
        </Grid>
      </Box>
      <ModalView />
    </>
  );
};

export default Shopping;
