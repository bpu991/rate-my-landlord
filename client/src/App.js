import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";

import {
    ThemeProvider,
    createMuiTheme,
    makeStyles,
} from "@material-ui/core/styles";


import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/Signin";
import ReviewForm from "./components/ReviewForm";
import LandlordsInYourCity from "./components/LandlordsInYourCity";
import AddLandlord from "./components/AddLandlord";
import LandlordProfile from "./components/LandlordProfile";
import { themeObj } from './theme'
import { restoreCSRF } from "./actions/csrf_actions";
import { CssBaseline } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "93vh",
    },
}));

function App() {
    const theme = createMuiTheme(themeObj);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(restoreCSRF());
    }, []);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
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
                <Route path="/addlandlord">
                    <AddLandlord />
                </Route>
                <Route path="/:cityId/:userId">
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
