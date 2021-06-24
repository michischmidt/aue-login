import React from "react";
import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  makeStyles,
  Typography
} from "@material-ui/core";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function GoogleAuth(props) {
  const classes = useStyles();

  // TODO: check backend every 2 seconds if process is finshed

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Geben gehen Sie bitte in die App und folgen den Anweisungen
        </Typography>
        <Box mt={5}>
          <CircularProgress size={50} />
        </Box>
      </div>
    </Container>
  );
}
