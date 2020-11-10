import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {getLandlordInfo} from '../actions/getInfo_actions';
import {postLandlordReviews} from "../actions/review_actions";
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

const ReviewForm = () => {
    const classes = useStyles();
    const landlord = useSelector(state => state.entities.landlordPages)
    const user = useSelector(state => state.authentication.user)
    const [rating, setRating] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLandlordInfo())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            rating,
            title,
            content,
            landlord: landlord.id,
            user: user.id
        }
        dispatch(postLandlordReviews(form));
    };
    if (!landlord || !user) return null
    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.space}>
                <Typography variant='h5'>Review</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='title'
                        label='Title'
                        name='title'
                        autoComplete='title'
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='content'
                        label='Content'
                        name='content'
                        autoComplete='content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    {/* <InputLabel id="demo-simple-select-label">Landlord</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={landlordId}
                        onChange={(e) => setLandlordId(e.target.value)}
                    >

                        {landlords && (landlords.map(landlord => (
                            <MenuItem value={landlord.id} key={landlord.id}>{landlord.fullName}</MenuItem>
                        )))}
                    </Select> */}
                    <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >

                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                    <Button
                        className={classes.button}
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        size='large'>
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
    
}

export default ReviewForm