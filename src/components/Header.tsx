import React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  AppBar,
  IconButton,
  Button,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MainMenu from "./MainMenu";

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

export default function Header({ siteTitle }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <MainMenu />
        <Typography variant="h6" component="span" className={classes.title}>
          <Link component={GatsbyLink} to="/" color="inherit">
            {siteTitle}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
