import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart, setSelectedImg }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Box mx="2rem">
        <Typography align="center" variant="h4" gutterBottom>
          LATEST PRODUCTS
        </Typography>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product
                product={product}
                onAddToCart={onAddToCart}
                setSelectedImg={setSelectedImg}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
};

export default Products;
