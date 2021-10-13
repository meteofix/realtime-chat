import React, {useContext, useState} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {BlueButton} from "./Navbar";
import classes from "./Login.module.css"
import {Context} from "../index";
//import firebase from "firebase/compat";
import page from'./page.module.css'
import TextField from "@mui/material/TextField";
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";

const Login = () => {
    const {auth} = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginWithEmail = async () => {
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    }
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider);
        console.log(user);
    }

    return (
        <Container className="rootContainer">
            <Grid container className={page.gridWrapper} style={{height: window.innerHeight - 50}}>
                <Grid container className={[page.gridContent, classes.authForm].join(' ')}>
                    <h3>Email</h3>
                    <TextField
                        fullWidth
                        maxRows={1}
                        value={email}
                        name={'email'}
                        type={'email'}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h3>Password</h3>
                    <TextField
                        fullWidth
                        maxRows={1}
                        value={password}
                        name={'password'}
                        type={'password'}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Box p={5}>
                        <BlueButton onClick={loginWithEmail}>Sign in</BlueButton>
                    </Box>
                </Grid>
                <Grid container className={[page.gridContent, classes.authServices].join(' ')}>
                    <Box p={5}>
                        <BlueButton onClick={loginWithGoogle} >Auth with Google</BlueButton>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;