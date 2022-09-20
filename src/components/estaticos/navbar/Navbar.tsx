import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import useLocalStorage from "react-use-localstorage";



function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado!")
        navigate('/login')
    }
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
                    <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    -Home-
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    -Postagens-
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    -Temas-
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formulariotema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    -Cadastrar Tema-
                                </Typography>
                            </Box>
                        </Link>

                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    -Logout-
                                </Typography>
                            </Box>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;