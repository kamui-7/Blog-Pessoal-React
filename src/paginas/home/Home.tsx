import React, { useEffect } from "react";
import {Typography, Grid, Button} from '@material-ui/core';
import "./Home.css";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Home() {
    let navigate = useNavigate();
      const [token, setToken] = useLocalStorage('token');
      
      useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])

    return (
            <Grid container direction="row" justifyContent="center" alignItems="center" className="fundoh">

                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className="tituloh">Seja bem vindo treinador(a)!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className="subtituloh">Temos que pegar e discutir sobre tudo!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className="botaoh" >Ver Postagens</Button>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://images.gamebanana.com/img/ico/sprays/pokeball.png" alt="" width="500px" height="500px" />
                </Grid>

                <Grid xs={12} className="fundoposts">
                    <TabPostagem />
                </Grid>
            </Grid>
    );
}

export default Home;