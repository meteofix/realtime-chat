import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";
import styled from "@mui/material/styles/styled";
import blue from "@mui/material/colors/blue";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const Navbar = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[700]),
        backgroundColor: blue[700],
        '&:hover': {
            backgroundColor: blue[700],
        },
    }));
    const user = true;

    return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container justifyContent={"flex-end"}>
                        {user ?
                            <NavLink>
                                <ColorButton>Sign out</ColorButton>
                            </NavLink>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <ColorButton>Sign in</ColorButton>
                            </NavLink>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
    );
};

export default Navbar;