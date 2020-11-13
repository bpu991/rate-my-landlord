import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import "../css-styles/navbar.css";
import { NavLink, useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GroupIcon from '@material-ui/icons/Group';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { blue } from "@material-ui/core/colors";
import { userActions } from "../actions/user_actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    button: {
        fontWeight: "500"
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#F4F8F7"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        backgroundColor: '#07518A'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const NavBar = () => {
    const user = useSelector(state => state.authentication.user)
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const loggedOut = useSelector((state) => !state.authentication.user);
    const dispatch = useDispatch()
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSignout = () => {
        dispatch(userActions.logout())
        history.push('/')
    };

    return (
        <div className='navbar-main'>
            <div className='navbar-col-1'>
                {/* <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <IconButton component={NavLink} to='/login'>
                            <GroupIcon />
                            <h6>  View all landlords</h6>
                        </IconButton>
                    </List>
                </Drawer> */}
            </div>

            <div className='navbar-col-2'>

            </div>

            <div className='navbar-col-3'>

            </div>

            <div className='navbar-col-4'>

            </div>

            <div className='navbar-col-5'>

            </div>

            <div className='navbar-col-6'>

            </div>
            
            <div className='navbar-col-7'>
                {loggedOut ? (
                    <>
                        <Button className={classes.button} size="Large">Login</Button>
                        <Button className={classes.button} size="Large">Signup</Button>
                    </>
                ) : (
                    <>
                        <IconButton component={NavLink} to={`/${user.city_id}/${user.id}`} className={classes.button} size="Large">
                            <LocationCityIcon />
                        </IconButton>
                        <Button className={classes.button} onClick={handleSignout} size="Large">Logout</Button>
                        
                    </>
                )}
            </div>
        </div>
    )
}

export default NavBar