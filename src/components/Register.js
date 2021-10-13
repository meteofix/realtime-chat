import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import page from "./page.module.css";
import Box from "@mui/material/Box";
import {BlueButton} from "./Navbar";
import TextField from "@mui/material/TextField";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        const auth = getAuth();
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
    }


    return (
        <Container className="rootContainer">
            <Grid container className={page.gridWrapper} style={{height: window.innerHeight - 50}}>

                <Grid container style={{width: '400px'}} className={[page.gridContent, ''].join(' ')}>
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
                        <BlueButton onClick={register}>Register</BlueButton>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;