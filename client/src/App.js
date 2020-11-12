import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";

import {
    ThemeProvider,
    createMuiTheme,
    makeStyles,
} from "@material-ui/core/styles";

import UserList from './components/UsersList';
import NavBar from "./components/NavBar";
import SignIn from "./components/Signin";
import ReviewForm from "./components/ReviewForm";
import LandlordsInYourCity from "./components/LandlordsInYourCity"
import LandlordProfile from "./components/LandlordProfile";
import { themeObj } from './theme'
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import { restoreCSRF } from "./actions/csrf_actions";
import { CssBaseline } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "93vh",
    },
}));

function App() {
    const theme = createMuiTheme(themeObj);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(restoreCSRF());
    }, []);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <nav>
                <ul>
                    {/* <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li> */}
                </ul>
            </nav>
            <Switch>
                <Route exact path='/login'>
                    <SignIn />
                </Route>

                <Route exact path='/signup'>
                    <SignUp />
                </Route>
                
                <Route path="/landlords/:landlordId">
                    <LandlordProfile />
                </Route>

                <Route path="/createform">
                    <ReviewForm />
                </Route>

                <Route path="/hello">
                    <LandlordsInYourCity/>
                </Route>

                <Route path="/">
                    <LandingPage />
                </Route>
                
                
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
