import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import page from "./page.module.css";
import {ScaleLoader} from "react-spinners";

const Loader = () => {
    return (
        <Container className="rootContainer">
            <Grid container className={page.gridWrapper} style={{height: window.innerHeight - 50}}>
                <Grid container className={page.gridContent}>
                    <ScaleLoader color={"#1976d2"}></ScaleLoader>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;