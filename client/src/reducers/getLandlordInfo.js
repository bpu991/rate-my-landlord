import { landlordInfoConstants } from '../constants/landlordInfo_constants'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case landlordInfoConstants.SET_INFO: {
            return action.landlordInfo
        }
        default: {
            return state
        }
    }
}