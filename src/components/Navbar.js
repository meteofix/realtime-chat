import React, {useContext} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";
import styled from "@mui/material/styles/styled";
import blue from "@mui/material/colors/blue";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTER_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

export const BlueButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[700]),
    backgroundColor: blue[700],
    '&:hover': {
        backgroundColor: blue[700],
    },
}));
export const TransparentButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[700]),
}));

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container justifyContent={"flex-end"}>
                        {user ?
                            <TransparentButton onClick={() => auth.signOut()}>Sign out</TransparentButton>
                            :
                            <div>
                                <NavLink to={LOGIN_ROUTE}>
                                    <TransparentButton>Sign in</TransparentButton>
                                </NavLink>
                                <NavLink to={REGISTER_ROUTE}>
                                    <TransparentButton>Sign up</TransparentButton>
                                </NavLink>
                            </div>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
    );
};

export default Navbar;