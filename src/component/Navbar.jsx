import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    display: "flex",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const headerMenu = [
    {
      navItem: "Home",
      path: "/",
    },
    {
      navItem: "Movie",
      path: "/movie",
    },
    {
      navItem: "Rental",
      path: "/rental",
    },
    {
      navItem: "Customer",
      path: "/customer",
    },
    {
      navItem: "Login",
      path: "/login",
    },
    {
      navItem: "Register",
      path: "/register",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <List component="nav" className={classes.navbar}>
            {headerMenu.map((item, index) => (
              <ListItem key={index}>
                <Button color="inherit" component={RouterLink} to={item.path}>
                  {item.navItem}
                </Button>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
