import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from 'redux/auth/oper.auth';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const initState = { email: '', password: '' };

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initState);
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevSt => ({ ...prevSt, [name]: value }));
  };

  const handleSub = e => {
    e.preventDefault();
    dispatch(loginUser(form));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box onSubmit={handleSub} component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            value={form.email}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={form.password}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/registration">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
