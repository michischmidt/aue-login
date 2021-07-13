import React from "react";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 1)
  }
}));

export default function AuthChoice(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Wähle einen Testverlauf aus
        </Typography>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => props.handleAuthChoice("googleAuth")}
            >
              Google Auth
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => props.handleAuthChoice("cubeAuth")}
            >
              3D Auth
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
