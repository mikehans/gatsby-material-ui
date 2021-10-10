import React from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";

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
  const [isOpen, setIsOpen] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsOpen(null);
  }

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleMenuClick}
      >
        <MenuIcon/>
      </IconButton>

      <Menu open={Boolean(isOpen)} onClose={handleMenuClose}>
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
          <MenuItem>Three</MenuItem>
      </Menu>
    </>
  );
}
