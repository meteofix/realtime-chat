import React, {useContext} from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import {BlueButton} from "./Navbar";
import classes from "./Login.module.css"
import {Context} from "../index";
import firebase from "firebase/compat";

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    }

    return (
        <Container>
            <Grid container className={classes.gridWrapper} style={{height: window.innerHeight - 50}}>
                <Grid container className={classes.authForm}>

                </Grid>
                <Grid container className={classes.authServices}>
                    <Box p={5}>
                        <BlueButton onClick={login} >Auth with Google</BlueButton>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;