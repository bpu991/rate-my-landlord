import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecificLandlord } from '../actions/landlord_actions';
import { getReview } from '../actions/review_actions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import NavBar from './NavBar';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getLandlordInfo } from '../actions/getInfo_actions';
import { postLandlordReviews } from "../actions/review_actions";
import MenuItem from '@material-ui/core/MenuItem';
import writing from "../images/writing.jpg";
import CardMedia from '@material-ui/core/CardMedia';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';

import '../css-styles/profile-page.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
        maxWidth: '100%',
        marginBottom: 40,
    },
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
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    pos: {
        marginBottom: 20,
    },
    rating: {
        width: "70%",
    },

    media: {
        height: 400,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const LandlordProfile = () => {
    const classes = useStyles();

    const profile = useSelector(state => state.entities.landlordPages);
    const reviews = useSelector(state => state.entities.reviews.reviews);
    const params = useParams();

    const landlord = useSelector(state => state.entities.landlordPages)
    const user = useSelector(state => state.authentication.user)
    const [rating, setRating] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSpecificLandlord(params.landlordId))
        dispatch(getReview(params.landlordId))
    }, [dispatch])

    useEffect(() => {
        dispatch(getLandlordInfo())
    }, [dispatch])

    const handleSubmit = (e) => {
        const form = {
            rating,
            title,
            content,
            landlord: landlord.id,
            user: user.id
        }
        dispatch(postLandlordReviews(form));
        window.location.reload(false);
    };
    
    return (
        <main>
            <NavBar />
            <div className='profile-page-main'>
                <div className='column-one'>

                </div>
                
                <div className='column-two'>
                    <div className='col-two-header'>
                        {profile && (
                                <>
                                    <div className='profile-header'>
                                        <h1>{profile.fullName}</h1>
                                    </div>
                                    <div className='profile-rating'>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Rating name="read-only" value={profile.rating} readOnly />
                                        </Box>
                                    </div>
                                </>
                                )
                            }
                    </div>
                    <div className='col-two-content'>
                        
                        {user && (
                            <div className='review-form'>
                                <div className={classes.space}>
                                    <Typography variant='h5'>Review</Typography>
                                    <form onSubmit={handleSubmit}>
                                        <Card className={classes.root}>
                                            <CardMedia
                                                className={classes.media}
                                                image={writing}
                                                title="cartoon review"
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
                                                <InputLabel className={classes.rating}>Rating</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    required
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
                            </div>
                        )}
                        {/* <div className='review-list'>
                            {reviews && reviews.length > 0 ? (reviews.map(review => (
                                <div className={classes.rootGrid}>
                                        <Card className={classes.root} m={12}>
                                            <CardContent>
                                                <Typography component="h1" className={classes.title}>
                                                    {review.title}
                                                </Typography>
                                                <Typography variant="h5" component="h3">
                                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                                        <Rating name="read-only" value={review.rating} readOnly />
                                                    </Box>
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {review.content}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                </div>
                            ))) : (
                                <h1>hello</h1>
                            )}
                            
                        </div> */}
                        <div className='review-list'>
                            {reviews && (reviews.map(review => (
                                <div className={classes.rootGrid}>
                                    <Card className={classes.root} m={12}>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                {review.title}
                                            </Typography>
                                            <Typography variant="h5" component="h3">
                                                <Box component="fieldset" mb={3} borderColor="transparent">
                                                    <Rating name="read-only" value={review.rating} readOnly />
                                                </Box>
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {review.content}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
            
                            )))}

                        </div>
                    </div>
                </div>
                <div className='column-three'>
                </div>             
            </div>
        </main>
    )
}

export default LandlordProfile