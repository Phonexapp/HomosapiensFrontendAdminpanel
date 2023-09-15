import React, { useState } from 'react';
import {
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import axios from "axios";
import { useEffect } from 'react';

const LoginPage = ({ setLogout }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'
  const [Disable, setDisable] = useState(false);
  const [UserToken, setUserToken] = useState("");

  const handleLogin = () => {
    // const config = {
    //   headers: {
    //     'Authorization': `Bearer ${UserToken}`,
    //   },
    // };
    // console.log("Data", Res.data.token);
    // console.log("Data", Res.data.User._id);

    axios.post("http://localhost:3001/api/Login", {
      username,
      password,
    })
      .then((Res) => {
        axios.post("http://localhost:3001/api/Home", {
          Message: "TokenRetured"
        },
          {
            headers: {
              'Authorization': `Bearer ${Res.data.token}`,
            }
          }
        )
          .then((Res) => {
            console.log("LoginData", Res.data.Message);
            setLogout(Res.data.Message);
          }).catch((e) => {
            console.log(e);
          })

      }).catch((e) => {
        console.log(e);
      })
  }

  const handleSignup = () => {
    axios.post("http://localhost:3001/api/Sign", {
      username,
      password
    })
  }

  return (
    <Container style={styles.container}>
      <form style={styles.form}>
        <Typography variant="h5" gutterBottom>
          {activeTab === 'login' ? 'Login' : 'Sign Up'}
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          style={styles.inputField}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          style={styles.inputField}
          onChange={(e) => setPassword(e.target.value)}
        />
        {activeTab === 'login' ? (
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={handleLogin}
          >
            Login
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={handleSignup}
          // disabled={Disable}
          >
            Sign Up
          </Button>
        )}
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          {activeTab === 'login'
            ? ""
            : ""}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          style={styles.button}
          onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
        >
          {activeTab === 'login' ? 'Sign Up' : 'Login'}
        </Button>
      </form>
    </Container>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px', // Increased the width
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  inputField: {
    marginBottom: '15px',
  },
  button: {
    marginTop: '10px',
  },
}

export default LoginPage;
