import { cityConstants } from "../constants/city_constants";

export const setCity = (city) => {
    return {
        type: cityConstants.SET_CITY,
        city
    };
};

const getCity = () => async (dispatch) => {

    const res = await fetch(`/api/city/`);
    if (res.ok) {
        const city = await res.json();
        dispatch(setCity(city))
    }
}

export default getCity