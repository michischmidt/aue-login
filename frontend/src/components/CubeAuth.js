// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  console.log("TCL -> GoogleAuth -> loading", loading);

  const useInterval = (callback, interval, immediate) => {
    const ref = useRef();

    // keep reference to callback without restarting the interval
    useEffect(() => {
      ref.current = callback;
    }, [callback]);

    useEffect(() => {
      // when this flag is set, closure is stale
      let cancelled = false;

      // wrap callback to pass isCancelled getter as an argument
      const fn = () => {
        ref.current(() => cancelled);
      };

      // set interval and run immediately if requested
      const id = setInterval(fn, interval);
      if (immediate) fn();

      // define cleanup logic that runs
      // when component is unmounting
      // or when or interval or immediate have changed
      return () => {
        cancelled = true;
        clearInterval(id);
      };
    }, [interval, immediate]);
  };

  // request the backend every 2 seconds until cube auth is finished
  useInterval(
    async isCancelled => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/auth/cube-status"
        );
        // check for cancellation after each await
        // to prevent further action on a stale closure
        if (isCancelled()) return;

        if (res.status !== 200) {
          // throw here to handle errors in catch block
          throw new Error(res.statusText);
        }
        const status = await res.data;
        console.log(status);
        if (status.status) {
          setLoading(false);
          props.handleAuthSuccess(true);
        }
        if (isCancelled()) return;
      } catch (err) {
        console.log("Fetch Error:", err);
      }
    },
    2000,
    true
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Gehen Sie bitte in die App und folgen den Anweisungen
        </Typography>
        <Box mt={5}>{loading && <CircularProgress size={50} />}</Box>
      </div>
    </Container>
  );
}
