import { searchConstants } from '../constants/search_constants'

export default function reducer(state = [], action) {
    switch (action.type) {
        case searchConstants.SET_SEARCH: {
            return action.search
        }
        case searchConstants.RESET_SEARCH: {
            return []
        }
        default: {
            return state
        }
    }
}