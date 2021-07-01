import React, { useState, useRef } from "react";
import Products from "../Products/Products";
import ShoppingImg from "../../assets/header.jpeg";
import { Grid, Typography, Box, Paper, Button } from "@material-ui/core";
import useStyles from "./styles";
import Models from "../Models/Models";
import ModalView from "../ModalView/ModalView";

const Shopping = ({ products, onAddToCart, devModeEmpty }) => {
  const classes = useStyles();
  const [selectedImg, setSelectedImg] = useState(null);
  const shopping = useRef(null);

  const handleScroll = () =>
    shopping.current?.scrollIntoView({ behavior: "smooth", block: "start" });

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
                <div className={classes.textGroup}>
                  <Typography variant="h3">Live with style</Typography>
                  <Typography className={classes.textH4} variant="h4">
                    Luxury Clothes Designed for Maximum Comfort
                  </Typography>
                  <Typography className={classes.textH5} variant="h5">
                    See our bestsellers from June!
                  </Typography>
                  <Button className={classes.button} onClick={handleScroll}>
                    {"Shop Now >"}{" "}
                  </Button>
                </div>
              </div>
            </Paper>
          </div>

          <Models />
          <div ref={shopping}>
            <Products
              products={products}
              onAddToCart={onAddToCart}
              setSelectedImg={setSelectedImg}
            />
          </div>
        </Grid>
      </Box>
      {selectedImg && (
        <ModalView selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}

      {/* for development mode when products are changed in commercejs and cardmedia src breaks*/}
      {/* <button onClick={devModeEmpty}>Empty</button> */}
    </>
  );
};

export default Shopping;
