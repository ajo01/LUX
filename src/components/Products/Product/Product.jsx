import React from "react";
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

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
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

      {/* <Paper variant="outlined">
<img src="https://img.ltwebstatic.com/images2_pi/2018/08/30/15356088573812032666_thumbnail_405x552.webp" />
</Paper> */}
    </Card>
  );
};

export default Product;
