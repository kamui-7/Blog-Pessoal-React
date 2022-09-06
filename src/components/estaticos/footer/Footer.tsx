import React from "react";
import { GitHub } from "@material-ui/icons";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import { Box } from "@mui/material";
import "./Footer.css";

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    
                    <Box className='fundof'>

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" >
                            <Typography variant="h5" align="center" gutterBottom className="textosf" >Fique atento às nossas redes sociais. </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/kamui7seven" target="_blank">
                                <FacebookIcon className="fonteredes" />
                            </a>
                            <a href="https://github.com/kamui-7" target="_blank">
                                <GitHub className="fonteredes" />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-marins-rodrigues/" target="_blank">
                                <LinkedInIcon className="fonteredes" />
                            </a>
                        </Box>
                    </Box>

                    <Box className="fundof2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textosf" >© 1998 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://pokemon.com">
                                <Typography variant="subtitle2" gutterBottom className="textosf" align="center">pokemon.com</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;