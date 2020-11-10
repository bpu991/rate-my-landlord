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
// import housepng from "../images/house.png"
import { userActions } from "../actions/user_actions";

const useStyles = makeStyles((theme) => ({
    space: {
        marginTop: 100,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        marginBottom: 15
    }
}));

const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    return (
        // <Container component='main' maxWidth='xs'>
        //     <div className={classes.space}>
        //         <Typography variant='h5'>Sign in</Typography>
        //         <form onSubmit={handleSubmit}>
        //             {(err) ? (
        //                 <Typography variant="caption" color="error">
        //                     {err.errors}
        //                 </Typography>
        //             ) : (null)}
        //             <TextField
        //                 variant='outlined'
        //                 margin='normal'
        //                 required
        //                 fullWidth
        //                 id='email'
        //                 label='Email Address'
        //                 name='email'
        //                 autoComplete='email'
        //                 autoFocus
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //             />
        //             <TextField
        //                 variant='outlined'
        //                 margin='normal'
        //                 required
        //                 fullWidth
        //                 name='password'
        //                 label='Password'
        //                 type='password'
        //                 id='password'
        //                 autoComplete='current-password'
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //             <Button
        //                 className={classes.button}
        //                 type='submit'
        //                 fullWidth
        //                 variant='contained'
        //                 color='primary'
        //                 size='large'>
        //                 Sign In
        //             </Button>
        //             <Link component={NavLink} to='/signup' variant='body2'>
        //                 Don't have an account? Sign up
        //             </Link>
        //         </form>
        //     </div>
        // </Container>
        <div className="login-page-body">
            <div className="login-container">
                <div className="login-card">
                    <form onSubmit={handleSubmit}>
                        <div className="house-group">
                            {/* <img src={housepng} className="house-png"/> */}
                        </div>
                        <div className="email-group">
                            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>

                        {/* {<div className="password-group">
                            <input type="text" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Password</label>
                        </div> */}
                        {/* <button type="submit"></button> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
