import React from "react";
import { Container,Typography, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(()=>createStyles({
  root: {
    margin: "5vh"
  }
}))

interface Props {}

const NoResults:React.FC<Props> = () =>  {
  const classes = useStyles();
  return (
          <Container>
            <Typography variant="h5" align="center" className={classes.root}>No results found</Typography>
          </Container>
  );
}

export default NoResults;
