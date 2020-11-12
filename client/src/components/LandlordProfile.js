import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecificLandlord } from '../actions/landlord_actions';
import { getReview } from '../actions/review_actions';
import ReviewForm from '../components/ReviewForm';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import NavBar from './NavBar';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../css-styles/profile-page.css'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 800,
        maxWidth: 900,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    pos: {
        marginBottom: 12,
    },
    rootGrid: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
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
    const loggedIn = useSelector(state => state.authentication.user);
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpecificLandlord(params.landlordId))
        dispatch(getReview(params.landlordId))
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(getReview(params.landlordId))
    // }, [dispatch])

    

    return (
        <main>
            <NavBar />
            <div className='profile-page-main'>
                <div className='column-one'>

                </div>
                {/* <div className='column-two'>

                </div> */}
                <div className='column-two'>
                    <div className='col-three-header'>
                        {profile && (
                                <>
                                    <div className='profile-header'>
                                        <h1>{profile.fullName}</h1>
                                    </div>
                                    <div className='profile-rating'>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Rating name="read-only" value={profile.rating} size="large" readOnly />
                                        </Box>
                                    </div>
                                </>
                                )
                            }
                    </div>
                    <div className='col-three-content'>
                        
                        <ul>
                            <ReviewForm />
                            {reviews && (reviews.map(review => (
                                <div className={classes.rootGrid}>
                                    <Grid container spacing={4}>
                                        <Grid item md>
                                            <Card className={classes.root}>
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
                                        </Grid>
                                    </Grid>
                                {/* // <li key={review.id}>
                                //     <h2>{review.title}</h2>
                                //     <h3>{review.rating}</h3>
                                //     <h4>{review.content}</h4>
                                // </li> */}
                                
                                </div>
                            )))}
                        </ul>
                    </div>
                </div>
                <div className='column-three'>

                </div>
                {/* <div className='column-five'>

                </div> */}
                
                
            </div>
        </main>
    )
}

export default LandlordProfile