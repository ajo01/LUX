import React from "react";
import Products from "../Products/Products";
import ShoppingImg from "../../assets/header.jpeg";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const Shopping = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2}>
        <img src={ShoppingImg} alt="Landing img" height="500px" className />
      </Grid>
      <Products products={products} onAddToCart={onAddToCart} />
    </>
  );
};

export default Shopping;
