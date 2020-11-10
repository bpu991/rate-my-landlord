import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from './Search'
import "../css-styles/landing-page.css";
import { getAllLandlords } from '../actions/landlord_actions';
import typing from "../images/typing.jpg";
const LandingPage = () => {
    const landlords = useSelector(state => state.entities.landlordPages.landlords);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllLandlords())
    }, [dispatch])

    return (
        // <main>
        //     <h1>My Home Page</h1>
        //     <Search />
        //     <ul>
        //         {landlords && (landlords.map(landlord => (
        //             <li>
        //                 <a value={landlord.id} key={landlord.id} href={`/landlords/${landlord.id}`}>{landlord.fullName}</a>
        //             </li>
        //         )))}
        //     </ul>
        // </main>
        // <div className='landing-page-body'>
        //     <div className='landing-page-banner'>
        //         <h1 className='landing-page-banner-header'>Rate my Landlord</h1>
        //     </div>
        //     <div className='middle-section-one'>
        //         <div className='middle-section-one-explanation'>
        //             <h1 className='rml-explanation-header'>What we do</h1>
        //             <h3 className='rml-explanation-body'>Rate my landlord is a website designed to give tenants the ability to rate their landlord and provide feedback</h3>
        //             <div className='rml-explanation-image'>
        //                 <img className='rml-explanation-image-1' src={typing} />
        //             </div>
        //         </div>
        //     </div>

        //     <div className='middle-section-two'>

        //     </div>
        // </div>
    )
}

export default LandingPage