import { landlordInfoConstants } from '../constants/landlordInfo_constants';

export const setLandlord = (landlordInfo) => {
    return {
        type: landlordInfoConstants.SET_INFO,
        landlordInfo
    };
};

export const getLandlordInfo = () => async (dispatch) => {

    const res = await fetch(`/api/landlords`);
    if (res.ok) {
        const landlords = await res.json();
        dispatch(setLandlord(landlords))
    }
}