import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  Avatar
} from '@material-ui/core';
import { Lock } from '@material-ui/icons';
import style from '../styles/Login.module.css'
const Login = () => {
  const [checked, setChecked] = React.useState(true);
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const handleLogin = () => {
    if (Password === "123456" && Email === "student@gmail.com") {
      window.location.href = "/admin/student"
    } else if (Password === "123456" && Email === "moderator@gmail.com") {
      window.location.href = "/moderator/createml"
    }
    else if (Password === "123456" && Email === "admin@gmail.com") {
      window.location.href = "/student/form"
    }
    else if (Password === "123456" && Email === "superadmin@gmail.com") {
      window.location.href = "/superadmin/createadmin"
    }
    else {
      alert("Please enter correct credentials")
    }
  }
  const paperStyle = { padding: 20, height: '60vh', width: 400, margin: "100px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  return (
    <div className={style.LoginContainer}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><Lock /></Avatar>
            <h2>Login</h2>
          </Grid>
          <TextField label='Email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' type='Email' fullWidth required />
          <TextField label='Password' value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' type='password' fullWidth required />
          <Grid align='center'>
            <Button onClick={() => handleLogin()} variant="contained" style={{ margin: '10px' }}>Login</Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
