import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { push } from 'react-router-redux'
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import getCity from '../actions/city_actions'
import { addNewLandlord } from "../actions/landlord_actions";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import NavBar from "../components/NavBar";
import "../css-styles/add-landlord.css";
import man from "../images/man-at-computer.png";

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

const AddLandlord = () => {
    const classes = useStyles();
    const user = useSelector(state => state.authentication.user)
    const cities = useSelector(state => state.entities.cities.cities)
    const landlord = useSelector(state => state.entities.landlordPages)
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCity())
    }, [dispatch])

    
    useEffect(() => {
       
        if(landlord.id) {
            history.push(`/landlords/${landlord.id}`)
        }
    }, [landlord])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            name,
            city
        }
        dispatch(addNewLandlord(form));
    };

    

    return (
        <>
            <NavBar />
            {/* <div className='add-landlord-main'>
                <div className='add-landlord-col-1'>

                </div>
                <div className='add-landlord-col-2'>
                    <Container component='main' maxWidth='xs'>
                        {user && (
                            <div className={classes.space}>
                                <form onSubmit={handleSubmit}>
                                    <Card className={classes.root}>
                                        <CardMedia
                                            className={classes.media}
                                            image={man}
                                            title="Signup"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Add landlord
                                            </Typography>
                                            <TextField
                                                variant='outlined'
                                                margin='normal'
                                                required
                                                fullWidth
                                                id='name'
                                                label='Name'
                                                name='name'
                                                autoComplete='name'
                                                autoFocus
                                                value={name}
                                                onChange={(e) => setName(e.target.value)} />
                                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            >

                                                {cities && (cities.map(city => (
                                                    <MenuItem value={city.id} key={city.id}>{city.cityName}</MenuItem>
                                                )))}
                                            </Select>
                                            <Button
                                                className={classes.button}
                                                type='submit'
                                                fullWidth
                                                variant='contained'
                                                color='primary'
                                                
                                                >
                                                Add Landlord
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </form>
                            </div>
                        )}
                    </Container>  
                </div>
                <div className='add-landlord-col-3'>

                </div>

            </div> */}
            <div className='addlandlord-root'>
                <div className='addlandlord-col-1'>

                </div>
                <div className='addlandlord-col-2'>
                    <div className='addlandlord-card'>
                        <div className='addlandlord-card-col-1'>
                            <div className='addlandlord-card-row-1'>
                                <h1>Add Landlord</h1>
                            </div>
                            <div className='addlandlord-card-row-2'>
                            <input
                                    className='input-field'
                                    type="text"
                                    name="name"
                                    placeholder="Full Name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete='off'
                                /> 
                            </div>
                            <div className='addlandlord-card-row-3'>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className='addlandlord-select'
                                >

                                    {cities && (cities.map(city => (
                                        <MenuItem value={city.id} key={city.id}>{city.cityName}</MenuItem>
                                    )))}
                                </Select>
                            </div>
                            <div className='addlandlord-card-row-4'>
                                <button className='addlandlord-btn' onClick={handleSubmit}>Add Landlord</button>
                            </div>
                        </div>
                        <div className='addlandlord-card-col-2'>

                        </div>
                    </div>
                </div>
                <div className='addlandlord-col-3'>

                </div>            
            </div>
            
        </>      
    )      
}

export default AddLandlord