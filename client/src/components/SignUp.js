import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import getCity from '../actions/city_actions'
import { userActions } from "../actions/user_actions";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import login from "../images/login.jpg";
import NavBar from "../components/NavBar";
import signup from "../images/signup-1.png";
import "../css-styles/signup.css";

const useStyles = makeStyles((theme) => ({
    space: {
        marginTop: 100,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        marginBottom: 15
    },
    media: {
        height: 400,
    },
    root: {
        width: "120%",
    },
}));

const SignUp = () => {
    const classes = useStyles();
    
    const loggedOut = useSelector(state => !state.authentication.user)
    const cities = useSelector(state => state.entities.cities.cities)

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cityId, setCityId] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCity())
    }, [dispatch])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            username,
            cityId
        }
        dispatch(userActions.register(user));
    };

    if (!loggedOut) {
        return (
            <Redirect to='/' />
        )
    }
    return (
        <>
            <NavBar />
            <div className='signup-page-main'>
                <div className='signup-col-1'>

                </div>
                <div className='signup-col-2'>
                    <Container component='main' maxWidth='xs'>
                        <div className={classes.space}>
                            <form onSubmit={handleSubmit}>
                                <Card className='signup-card'>
                                    <CardMedia
                                        className={classes.media}
                                        image={signup}
                                        title="Signup"
                                    />
                                    <CardContent>
                                        <div className='card-header'>
                                            <Typography gutterBottom variant="inherit" component="h2">
                                                Signup
                                            </Typography>
                                        </div>
                                        <TextField
                                            variant='outlined'
                                            margin='normal'
                                            required
                                            fullWidth
                                            id='username'
                                            label='Username'
                                            name='username'
                                            autoComplete='username'
                                            autoFocus
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}/>
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
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
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
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={cityId}
                                            onChange={(e) => setCityId(e.target.value)}
                                        >

                                            {cities && ( cities.map(city => (
                                                <MenuItem value={city.id} key={city.id}>{city.cityName}</MenuItem>
                                            )))}
                                        </Select>
                                        <Button
                                            className={classes.button}
                                            type='submit'
                                            fullWidth
                                            variant='contained'
                                            color='primary'
                                            size='large'>
                                            Create Account
                                            </Button>
                                    </CardContent>

                                    <CardActions>
                                        <Link component={NavLink} to='/login' variant='body2'>
                                            Already have an account? Login here
                                        </Link>
                                    </CardActions>
                                </Card>
                            </form>
                        </div>
                    </Container>
                </div>
                <div className='signup-col-3'>

                </div>

            </div>
        </>
    );
};

export default SignUp;
