import React, { useEffect } from "react";
import {
  Container,
  CssBaseline,
  makeStyles,
  Typography
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { green } from "@material-ui/core/colors";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function Success() {
  const classes = useStyles();

  useEffect(() => {
    const resetAuth = async () => {
      await axios.post("http://localhost:8080/api/auth/cube-status", {
        status: false
      });
    };

    resetAuth();
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CheckCircleOutlineIcon
          fontSize="large"
          style={{ color: green[500] }}
        />
        <Typography component="h1" variant="h5" align="center">
          Login war erfolgreich
        </Typography>
      </div>
    </Container>
  );
}
