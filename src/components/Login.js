import React, {useContext} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {BlueButton} from "./Navbar";
import classes from "./Login.module.css"
import {Context} from "../index";
import firebase from "firebase/compat";
import page from'./page.module.css'

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    }

    return (
        <Container className="rootContainer">
            <Grid container className={page.gridWrapper} style={{height: window.innerHeight - 50}}>
                <Grid container className={[page.gridContent, classes.authForm].join(' ')}>

                </Grid>
                <Grid container className={[page.gridContent, classes.authServices].join(' ')}>
                    <Box p={5}>
                        <BlueButton onClick={login} >Auth with Google</BlueButton>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;