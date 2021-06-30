import React from "react";
import Products from "../Products/Products";
import ShoppingImg from "../../assets/header.jpeg";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Models from "../Models/Models";

const Shopping = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default Shopping;
