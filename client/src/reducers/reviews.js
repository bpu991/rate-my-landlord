import { reviewConstants } from '../constants/review_constants'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case reviewConstants.SET_REVIEW: {
            return action.review
        }
        default: {
            return state;
        }
    }
}