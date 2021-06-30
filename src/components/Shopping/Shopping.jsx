import React from "react";
import Products from "../Products/Products";
import ShoppingImg from "../../assets/header.jpeg";
import { Grid, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

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
          THRIFTY SHOP
        </Typography>
        <img src={ShoppingImg} alt="Landing img" width="85%" className />
        <Products products={products} onAddToCart={onAddToCart} />
      </Grid>
    </>
  );
};

export default Shopping;
