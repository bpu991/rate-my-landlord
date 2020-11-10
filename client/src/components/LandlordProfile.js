import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecificLandlord } from '../actions/landlord_actions';
import { getReview } from '../actions/review_actions';
import ReviewForm from '../components/ReviewForm';

const LandlordProfile = () => {
    const profile = useSelector(state => state.entities.landlordPages);
    const reviews = useSelector(state => state.entities.reviews.reviews);
    const loggedIn = useSelector(state => state.authentication.user);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificLandlord(params.landlordId))
    }, [dispatch])

    useEffect(() => {
        dispatch(getReview(params.landlordId))
    }, [dispatch])

    

    return (
        <main>
            {profile && (
                <>
                    <h1>{profile.fullName}</h1>
                    <h1>{profile.rating}</h1>
                </>
                )
            }
            <ReviewForm />
            <ul>
                {reviews && (reviews.map(review => (
                    <li key={review.id}>
                        <h2>{review.title}</h2>
                        <h3>{review.rating}</h3>
                        <h4>{review.content}</h4>
                    </li>
                    ))
                )}
            </ul>
        </main>
          
    )
}

export default LandlordProfile