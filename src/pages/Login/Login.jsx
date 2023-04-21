import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmitLogin(e){
        e.preventDefault();
          try {
            const response = await fetch("http://localhost:3001/login", {
              method: "POST",
              body: JSON.stringify({
                email,
                password
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            const data = await response.json();
            localStorage.setItem("token", data.jwt)
            if(data.role === 0){
                navigate('/productcrud');
            } else if(data.role === 1){
                navigate('/user')
            }
          } catch (err) {
            console.log(err);
          }
          setEmail('');
          setPassword('');
    }

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
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
<Box component="form" noValidate sx={{ mt: 3 } } onSubmit={handleSubmitLogin}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField onChange={(e)=> setEmail(e.target.value)}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={(e)=> setPassword(e.target.value)}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button

          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/register" variant="body2">
              sign up for an account
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
  );
  }

export default Login;