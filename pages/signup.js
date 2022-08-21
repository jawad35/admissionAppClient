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
const Login = () => {
  // const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleLogin = () => {

  }
  const paperStyle = { padding: 20, height: '65vh', width: 600, margin: "100px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><Lock /></Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid style={{ padding: '5px' }} xs={6}>
              <TextField label='Email' placeholder='Enter Email' type='Email' fullWidth required />
              <TextField label='Phone Number' placeholder='Enter Phone Number' type='text' fullWidth required />
              <TextField label='CNIC' placeholder='Enter CNIC' type='text' fullWidth required />
              <TextField label='First/middle Name' placeholder='Enter First/middle Name' type='text' fullWidth required />
              <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required />

            </Grid>
            <Grid style={{ padding: '5px' }} xs={6}>
              <TextField label='Email Confirm' placeholder='Confirm Email' type='Email' fullWidth required />
              <TextField label='Confirm Phone Number' placeholder='Enter Confirm Phone Number' type='text' fullWidth required />
              <TextField label='Confirm CNIC' placeholder='Enter Confirm CNIC' type='text' fullWidth required />
              <TextField label='Last Name' placeholder='Enter Last Name' type='text' fullWidth required />
              <TextField label='Confirm Password' placeholder='Enter Confirm Password' type='password' fullWidth required />

            </Grid>
          </Grid>
          <Grid align='center'>
            <Button onClick={handleLogin} variant="contained" color='primary' style={{ margin: '10px' }}>Register</Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
