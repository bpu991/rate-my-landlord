import { cityConstants } from '../constants/city_constants'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case cityConstants.SET_CITY: {
            return action.city
        }
        default: {
            return state
        }
    }
}