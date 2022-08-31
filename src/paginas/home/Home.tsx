import React from "react";
import {Button, Box, Paper} from "@material-ui/core";
import "./Home.css";


function Home(){
    return(
        <>
        <Paper>
            <Box p={2}>
                <Box display="flex" justifyContent="center">
                    <h1>Titulo</h1>
                </Box>
                    <img src="https://images.gamebanana.com/img/ico/sprays/pokeball.png" alt="Pokebola" style={{height: "100%", width: "100%"}} />
                <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color="primary"> Texto 1 </Button>
                        <Button variant="contained" color="secondary"> Texto 2 </Button>
                    </Box>
            </Box>
        </Paper>
        </>
    );
}

export default Home;