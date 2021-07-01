import React, { useState } from "react";
import Products from "../Products/Products";
import ShoppingImg from "../../assets/header.jpeg";
import { Grid, Typography, Box, Paper, Button } from "@material-ui/core";
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
          <div className={classes.center}>
            <Typography className={classes.title} variant="h3" gutterBottom>
              LUX SHOP
            </Typography>
          </div>
          <div className={classes.center}>
            <Paper className={classes.paper}>
              <img src={ShoppingImg} alt="Landing img" width="90%" />
              <div className={classes.overlay}>
                Overlay
                <Button className={classes.button}>Shop Now</Button>
              </div>
            </Paper>
          </div>

          <Models />
          <Products
            products={products}
            onAddToCart={onAddToCart}
            setSelectedImg={setSelectedImg}
          />
        </Grid>
      </Box>
      {selectedImg && (
        <ModalView selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
};

export default Shopping;
