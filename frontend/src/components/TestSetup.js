import React, { useState } from 'react'
import { Container, CssBaseline, makeStyles } from '@material-ui/core'
import SignIn from './SignIn'
import AuthChoice from './AuthChoice'
import GoogleAuth from './GoogleAuth'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export default function TestSetup () {
  const classes = useStyles()
  const [testRun, setTestRun] = useState(null)
  const [login, setLogin] = useState(false)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {!testRun && <AuthChoice handleAuthChoice={setTestRun} />}
        {!!testRun && !login && <SignIn handleLogin={setLogin} />}
        {login && testRun === 'googleAuth' && <GoogleAuth/>}
        {/* {login && testRun === "cubeAuth" ? <CubeAuth/>} */}
      </div>
    </Container>
  )
}
