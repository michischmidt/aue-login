import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import OTPInput from "./OTPInput";

import axios from "axios";
import { toast } from "react-toastify";
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(5, 0, 1)
  }
}));

export default function GoogleAuth(props) {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const onSubmit = async e => {
    e.preventDefault();
    const res = await axios.get("http://localhost:8080/api/auth/google-code");
    if (res.data.code === input) {
      props.handleAuthSuccess(true);
    } else {
      toast.error("Code stimmt nicht überein");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Geben Sie bitte den Zahlencode aus der App ein und bestätigen Sie
        </Typography>
        <Box mt={3}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
              <OTPInput
                autoFocus
                isNumberInput
                length={6}
                className="otpContainer"
                inputClassName="otpInput"
                onChangeOTP={otp => setInput(otp)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
                disabled={input.length < 6}
              >
                Bestätigen
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}
