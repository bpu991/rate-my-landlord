import { reviewConstants } from '../constants/review_constants';

export const setReview = (review) => {
    return {
        type: reviewConstants.SET_REVIEW,
        review
    };
};

export const getReview = (landlordId) => async (dispatch) => {

    const res = await fetch(`/api/landlords/reviews/${landlordId}`);
    if (res.ok) {
        const review = await res.json();
        dispatch(setReview(review))
    }
}

export const postLandlordReviews = (form) => async (dispatch) => {

    const res = await fetch(`/api/reviews/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });

    if (res.ok) {
        const reviews = await res.json();
        dispatch(setReview(reviews))
    }
}
