import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={classes.wrapper} variant="h6" color="initial">
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              color="inherit"
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              underline="none"
              color="inherit"
            >
              About
            </Link>
            <Link
              component={RouterLink}
              to="/products"
              underline="none"
              color="inherit"
            >
              Products
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
