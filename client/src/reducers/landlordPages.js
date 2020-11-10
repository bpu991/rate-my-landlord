import { landlordConstants } from '../constants/landlord_constants'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case landlordConstants.SET_LANDLORD: {
            return action.landlord
        }
        default: {
            return state;
        }
    }
}