import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.up("sm")]: {
        marginLeft: "2vh",
      }
    },
    extra: {
      background: theme.palette.secondary.main
    }
  }),
);

const NavBar:React.FC<AppBarProps> = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.extra} variant="dense">
          <Typography variant="h6" className={classes.title} align="left">
            Comrade
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
