import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link } from "react-router-dom"
import './Navbar.css';



function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='fundonb'>
                     <Box>
                        <img src="https://images.gamebanana.com/img/ico/sprays/pokeball.png" alt="" width="50px" height="50px" />
                    </Box>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            Poké-Blog
                        </Typography>
                    </Box>
                    <Box>
                        <img src="https://images.gamebanana.com/img/ico/sprays/pokeball.png" alt="" width="50px" height="50px" />
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                -Home-
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                -Postagens-
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                -Temas-
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                -Cadastrar Tema-
                            </Typography>
                        </Box>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    -Logout-
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;