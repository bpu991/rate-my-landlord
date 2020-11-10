import {landlordConstants} from '../constants/landlord_constants';

export const setLandlord = (landlord) => {
    return {
        type: landlordConstants.SET_LANDLORD,
        landlord
    };
};

export const getSpecificLandlord = (landlordId) => async (dispatch) => {
    
    const res = await fetch(`/api/landlords/${landlordId}`);

    if (res.ok) {
        const landlordProfile = await res.json();
        dispatch(setLandlord(landlordProfile))
    }
}

export const getAllLandlords = () => async (dispatch) => {

    const res = await fetch(`/api/landlords`);
    if (res.ok) {
        const landlords = await res.json();
        dispatch(setLandlord(landlords))
    }
}


