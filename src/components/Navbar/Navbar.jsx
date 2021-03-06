import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Icon from "../../assets/shop.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems, totalPrice }) => {
  const classes = useStyles();

  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ background: "black" }}
    >
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <img
            src={Icon}
            alt="LUX Logo"
            height="30px"
            className={classes.image}
          />
          LUX
        </Typography>
        <div className={classes.grow} />
        {location.pathname === "/" && (
          <>
            {/* <Typography variant="body1">{totalPrice}</Typography> */}
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
