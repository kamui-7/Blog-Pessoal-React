import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom'
import { Box } from "@mui/material";
import { login } from '../../services/Service';
import UserLogin from "../../models/UserLogin";
import useLocalStorage from "react-use-localstorage";
import './Login.css';

function Login() {

    let history = useNavigate();

    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            email: '',
            senha: '',
            token: ''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin(
            {
                ...userLogin,
                [e.target.name]: e.target.value
        }
        )
    }

    useEffect(()=>{
        if(token !== ''){
            history('/home');
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            await login(`/api/Usuarios/logar`, userLogin, setToken)

            alert('Usuario Logado com sucesso!')
        } catch (error) {
            alert('Dados de login incorretos, tente novamente.')
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">

            <Grid xs={6} className="imgfundol">

            </Grid>

            <Grid alignItems="center" xs={6}>

                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className="fontel" >Entrar</Typography>
                        <TextField value={userLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>)=>updateModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=>updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign="center">
                            
                                <Button type="submit" variant="contained" color="primary">
                                    Logar
                                </Button>
                            
                        </Box>
                        
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'> Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario' className="text-decorator-none">
                            <Typography variant='subtitle1' gutterBottom align='center' className="subtitulol2" >Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>

        </Grid>
    );
}

export default Login;