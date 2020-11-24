import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import {getLandlordInfo} from '../actions/getInfo_actions';
import {postLandlordReviews} from "../actions/review_actions";
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import writing from "../images/writing.jpg"

import "../css-styles/review-form.css"
const useStyles = makeStyles((theme) => ({
    space: {
        marginTop: 50,
        marginBottom: 50
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        marginBottom: 15,
        maxWidth: 100,
    }, 
    root: {
        width: "150%",
    },
    rating : {
        width: 400,
    }, 

    media: {
        height: 400,
    },

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
                    <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={writing}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
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
                                    fullWidth
                                    multiline
                                    required
                                    rows={4}
                                    defaultValue="Write your review here"
                                    variant="outlined"
                                    id='content'
                                    label='Content'
                                    name='content'
                                    autoComplete='content'
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                                
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    className={classes.rating}
                                    label='rating'
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >

                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </CardContent>
                        <CardActions>
                            <Button className={classes.button}
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                                size='large'
                                Submit>
                                Submit
                            </Button>
                            
                        </CardActions>
                    </Card>
                </form>
            </div>
        </Container >
    );
    
}

export default ReviewForm