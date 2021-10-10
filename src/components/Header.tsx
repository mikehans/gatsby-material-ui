import React from "react";
import { Link } from "gatsby";
import {
  AppBar,
  IconButton,
  Button,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MainMenu from "./MainMenu";

// import * as styles from "./Header.module.scss";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header({ siteTitle, description}) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <MainMenu />
        <Typography variant="h6" component="span" className={classes.title}>
          {siteTitle}
        </Typography>
        {/* <Typography variant="h6" component="span" className={classes.title}>
          {description}
        </Typography> */}
        <Button color="inherit">Login</Button>
        <Button color="inherit">Button</Button>
      </Toolbar>
    </AppBar>
  );
}
