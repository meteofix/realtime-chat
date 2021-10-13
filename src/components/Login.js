import React, {useContext, useState} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {BlueButton} from "./Navbar";
import classes from "./Login.module.css"
import {Context} from "../index";
import page from'./page.module.css'
import TextField from "@mui/material/TextField";


const Login = () => {
    const {auth, app} = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginWithEmail = async () => {
        await app.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`Error ${errorCode}: ${errorMessage}`)
            });
    }
    const loginWithGoogle = async () => {
        const provider = new app.auth.GoogleAuthProvider();
        await app.auth().signInWithPopup(provider)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`Error ${errorCode}: ${errorMessage}`)
            });
    }

    return (
        <Container className="rootContainer">
            <Grid container  justifyContent={'center'} className={page.gridWrapper} style={{height: window.innerHeight - 50}}>
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