import React from 'react';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import{toast} from 'react-toastify';


function Navbar() {
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]> (
        (state) => state.tokens
    )
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info("usuario deslogado", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
            progress: undefined,
            });
        history('/login')
    }
    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense" className='coloracao'>
            <Link to='/home' className='text-decorator-none'>
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>
            </Link>

            <Box display="flex" justifyContent="start">
                <Link to='/home' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link to='/posts' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to='/temas' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>
                <Link to='/formularioTema' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Cadastrar tema
                        </Typography>
                    </Box>
                </Link>
                <Box mx={1} className='cursor' onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>
            </Box>
        </Toolbar>
    </AppBar>

    }


    return (
        <>
            {navbarComponent};
        </>
    )
}

export default Navbar;