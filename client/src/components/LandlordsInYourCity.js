import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { landlordsInYourCity } from '../actions/landlord_actions';

const LandlordsInYourCity = () => {
    const user = useSelector(state => state.authentication.user);
    const landlords = useSelector(state => state.entities.landlordPages.bLandlordsInYourCity)
    const dispatch = useDispatch();

    useEffect(() => {
        if(user) {
            console.log('asdfas:', user)
            dispatch(landlordsInYourCity(user.city_id, user.id)) 
        }
    }, [dispatch, user])

    return (
        <div>
            {landlords && (landlords.map(landlord => (
                <h1>{landlord.fullName}</h1>
            )))}
                
            
        </div>       
    )
    
}

export default LandlordsInYourCity