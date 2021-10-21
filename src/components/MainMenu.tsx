import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItem,
  Link,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link as GatsbyLink } from "gatsby";

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

export default function MainMenu() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(null);
  const classes = useStyles();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDrawerOpen(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleMenuClick}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={isDrawerOpen} onClose={handleDrawerClose}>
        <nav>
          <List>
            <ListItem>
              <Link to="/" component={GatsbyLink}>
                <ListItemText primary="Home" secondary="Go home" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/blog" component={GatsbyLink}>
                <ListItemText primary="Blog" secondary="My tech blog" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/projects" component={GatsbyLink}>
                <ListItemText primary="Projects" secondary="Tech projects" />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/other-interests" component={GatsbyLink}>
                <ListItemText primary="Other interests" secondary="Woodwork, gardening, electronics, ..." />
              </Link>
            </ListItem>
          </List>
        </nav>
      </Drawer>
    </>
  );
}
