import React from 'react'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import OTPInput from './OTPInput'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  submit: {
    margin: theme.spacing(7, 0, 1)
  }
}))

export default function GoogleAuth (props) {
  const classes = useStyles()

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
                onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => props.handleAuthChoice('googleAuth')}
              >
                Bestätigen
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  )
}
