import { searchConstants } from "../constants/search_constants";

export const setSearch = (search) => {
    return {
        type: searchConstants.SET_SEARCH,
        search
    };
};


export const resetSearch = () => {
    return {
        type: searchConstants.RESET_SEARCH,
    };
};

const searchLandlords = (searchItem) => async (dispatch) => {

    if (searchItem.length < 3) {
        dispatch(resetSearch())
        return
    }

    const res = await fetch(`/api/search/${searchItem}`)
    
    if (res.ok) {
        const search = await res.json();
        dispatch(setSearch(search))
    }
}

export default searchLandlords