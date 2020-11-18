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

    const res = await fetch(`/api/landlords/`);
    if (res.ok) {
        const landlords = await res.json();
        dispatch(setLandlord(landlords))
    }
}

export const addNewLandlord = (form) => async (dispatch) => {
    const res = await fetch(`/api/landlords/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });

    if (res.ok) {
        const landlord = await res.json();
        dispatch(setLandlord(landlord))
    }
}

export const landlordsInYourCity = (cityId, userId) => async (dispatch) => {

    const res = await fetch(`/api/landlords/city/${cityId}/${userId}`);
    if (res.ok) {
        const landlords = await res.json();
        dispatch(setLandlord(landlords))
    }
}


