import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product, onAddToCart, setSelectedImg }) => {
  const classes = useStyles();

  const [raised, setRaised] = useState(false);

  return (
    <Card
      className={raised ? classes.cardHovered : classes.root}
      onMouseOver={() => setRaised(true)}
      onMouseOut={() => setRaised(false)}
    >
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
        onClick={() => setSelectedImg(product.media.source)}
      />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <CardActions
        disableSpacing
        className={classes.cardActions}
        onClick={() => {
          onAddToCart(product.id, 1);
        }}
      >
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
