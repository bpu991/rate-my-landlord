import { landlordConstants } from '../constants/landlord_constants'
const initialState = {
    id: null,
    fullName: '',
    city_id: null,
    rating: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case landlordConstants.SET_LANDLORD: {
            return action.landlord
        }
        default: {
            return state;
        }
    }
}