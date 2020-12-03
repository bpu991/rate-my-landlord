import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import "../css-styles/login-page.css";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Card from '@material-ui/core/Card';

import { userActions } from "../actions/user_actions";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import login from "../images/login.jpg";
import NavBar from "../components/NavBar";
import "../css-styles/login-page.css";
const useStyles = makeStyles((theme) => ({
    space: {
        marginTop: 100,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        marginBottom: 15,
        maxWidth: 100
    }, 

    buttonDemo: {
        maxWidth: 600
    },

    root: {
        width: "120%",
    },
    rating: {
        width: 400,
    },

    media: {
        height: 400,
    },
}));

const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [demoEmail, setDemoEmail] = useState("demo@example.com");
    const [demoPassword, setDemoPassword] = useState("password");
    const err = useSelector(state => state.errors.auth)

    const loggedOut = useSelector(state => !state.authentication.user)

    if (!loggedOut) {
        return (
            <Redirect to='/' />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userActions.login(email, password));
    };

    const handleDemoSubmit = (e) => {
        // setDemoEmail('demo@example.com')
        // setDemoPassword('password')
        e.preventDefault();
        dispatch(userActions.login(demoEmail, demoPassword));
    };

    return (
        <>
            <NavBar />
            <div className='login-page-main'>
                <div className='login-col-1'>

                </div>
                <div className='login-col-2'>
                    <Container component='main' maxWidth='xs'>
                        <div className={classes.space}>
                            {/* <form onSubmit={handleSubmit}> */}
                                {(err) ? (
                                    <Typography variant="caption" color="error">
                                        {err.errors}
                                    </Typography>
                                ) : (null)}
                                <Card className={classes.root}>
                                        <CardMedia
                                            className={classes.media}
                                            image={login}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Login
                                            </Typography>
                                            <form onSubmit={handleSubmit}>
                                                <TextField
                                                    variant='outlined'
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='email'
                                                    label='Email Address'
                                                    name='email'
                                                    autoComplete='email'
                                                    autoFocus
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}></TextField>
                                                <TextField
                                                    variant='outlined'
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    name='password'
                                                    label='Password'
                                                    type='password'
                                                    id='password'
                                                    autoComplete='current-password'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div className='button-section'>
                                                    <Button
                                                        className={classes.button}
                                                        type='submit'
                                                        fullWidth
                                                        variant='contained'
                                                        color='primary'
                                                        size='large'>
                                                        Sign In
                                                    </Button>  
                                                    
                                                </div>
                                            </form>
                                            <div className='button-section'>
                                                <form onSubmit={handleDemoSubmit}>
                                                     <Button
                                                        className={classes.button}
                                                        type='submit'
                                                        fullWidth
                                                        variant='contained'
                                                        color='primary'
                                                        size='large'>
                                                        Demo
                                                    </Button>
                                                </form>
                                            </div>
                                        </CardContent>
                                
                                    <CardActions>
                                        <Link component={NavLink} to='/signup' variant='body2'>
                                            Don't have an account? Sign up
                                        </Link>
                                    </CardActions>
                                </Card>
                            {/* </form> */}
                            
                        </div>
                    </Container>
                </div>
                <div className='login-col-3'>

                </div>
                
            </div>
        </>
    );
};

export default SignIn;
