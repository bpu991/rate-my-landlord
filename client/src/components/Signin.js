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
        width: 400
    }, 

    buttonDemo: {
        maxWidth: 600
    },

    root: {
        width: "120%"
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
            <div className='login-root'>
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
                            <div className='login-card'>
                                <div className='login-card-col-1'>
                                    <div className='login-card-row-1'>
                                        <h1>Login</h1>
                                    </div>
                                    <div className='login-card-row-2'>
                                        <input
                                            className='input-field'
                                            name='email'
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className='login-card-row-3'>
                                        <TextField
                                            className='input-field'
                                            name='password'
                                            placeholder='Password'
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className='login-card-row-4'>
                                        <button onClick={handleSubmit}>Login</button>
                                    </div>

                                    <div className='login-card-row-5'>
                                        <button onClick={handleDemoSubmit}>Demo</button>
                                    </div>

                                    <div className='login-card-row-6'>
                                        <a href={`/signup`}>
                                            Sign-up here!
                                        </a>
                                    </div>

                                </div>
                                <div className='login-card-col-2'>

                                </div>
                            </div>
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
