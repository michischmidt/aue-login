import React from 'react'
import {
  Container,
  CssBaseline,
  makeStyles,
  Typography
} from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export default function Success (props) {
  const classes = useStyles()

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
  )
}
