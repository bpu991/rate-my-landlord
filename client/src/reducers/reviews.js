import { reviewConstants } from '../constants/review_constants'

const initialState = {
    content: '',
    id: null,
    landlord_id: null,
    rating: null,
    title: '',
    user_id: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case reviewConstants.SET_REVIEW: {
            return action.review
        }
        default: {
            return state;
        }
    }
}