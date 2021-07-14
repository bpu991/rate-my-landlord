import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { landlordsInYourCity } from '../actions/landlord_actions';
import NavBar from "./NavBar";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import image from '../images/signup-background.png'
import Rating from '@material-ui/lab/Rating';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import "../css-styles/city-landlords.css";

const useStyles = makeStyles((theme) => ({
    rootLeft: {
        width: "100%",
        maxWidth:'100%',
        marginBottom: 8,
        display: "block",
        // backgroundImage: `url(${image})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover', 
        // backgroundRepeat: 'no-repeat',
    },

    rootTop: {
        width: "60%",
        maxWidth: '160%',
        marginBottom: 8
    },
    rootTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#4F89BE"
    }, 
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    link: {
        paddingLeft: '3%',
        marginBottom: 8,
        width: '100%',

    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const LandlordsInYourCity = () => {
    const classes = useStyles();
    const user = useSelector(state => state.authentication.user);
   
    const aLandlords = useSelector(state => state.entities.landlordPages.aLandlordsInYourCity)
    const bLandlords = useSelector(state => state.entities.landlordPages.bLandlordsInYourCity)
    const cLandlords = useSelector(state => state.entities.landlordPages.cLandlordsInYourCity)
    const dLandlords = useSelector(state => state.entities.landlordPages.dLandlordsInYourCity)
    const eLandlords = useSelector(state => state.entities.landlordPages.eLandlordsInYourCity)
    const fLandlords = useSelector(state => state.entities.landlordPages.fLandlordsInYourCity)
    const gLandlords = useSelector(state => state.entities.landlordPages.gLandlordsInYourCity)
    const hLandlords = useSelector(state => state.entities.landlordPages.hLandlordsInYourCity)
    const iLandlords = useSelector(state => state.entities.landlordPages.iLandlordsInYourCity)
    const jLandlords = useSelector(state => state.entities.landlordPages.jLandlordsInYourCity)
    const kLandlords = useSelector(state => state.entities.landlordPages.kLandlordsInYourCity)
    const lLandlords = useSelector(state => state.entities.landlordPages.lLandlordsInYourCity)
    const mLandlords = useSelector(state => state.entities.landlordPages.mLandlordsInYourCity)
    const nLandlords = useSelector(state => state.entities.landlordPages.nLandlordsInYourCity)
    const oLandlords = useSelector(state => state.entities.landlordPages.oLandlordsInYourCity)
    const pLandlords = useSelector(state => state.entities.landlordPages.pLandlordsInYourCity)
    const qLandlords = useSelector(state => state.entities.landlordPages.qLandlordsInYourCity)
    const rLandlords = useSelector(state => state.entities.landlordPages.rLandlordsInYourCity)
    const sLandlords = useSelector(state => state.entities.landlordPages.sLandlordsInYourCity)
    const tLandlords = useSelector(state => state.entities.landlordPages.tLandlordsInYourCity)
    const uLandlords = useSelector(state => state.entities.landlordPages.uLandlordsInYourCity)
    const vLandlords = useSelector(state => state.entities.landlordPages.vLandlordsInYourCity)
    const wLandlords = useSelector(state => state.entities.landlordPages.wLandlordsInYourCity)
    const xLandlords = useSelector(state => state.entities.landlordPages.xLandlordsInYourCity)
    const yLandlords = useSelector(state => state.entities.landlordPages.yLandlordsInYourCity)
    const zLandlords = useSelector(state => state.entities.landlordPages.zLandlordsInYourCity)
    const dispatch = useDispatch();

    
    useEffect(() => {
        if(user) {
            dispatch(landlordsInYourCity(user.city_id, user.id)) 
        }
    }, [dispatch, user])

    
    // if(!user) {
    //     return (
    //         <Redirect to='/' />
    //     )
    // }

    return (
        <>
            <NavBar />
            <div className='city-landlords-main'>
                <div className='city-landlords-col-1'>
                    

                </div>
                <div className='city-landlords-col-2'>
                    <div className='col-2-top'>
                       
                    </div>
                    <div className='col-2-content'>
                        <div>
                            <Card className={classes.rootLeft}>
                                {user && (
                                    <Typography component="h1" className={classes.rootTitle}>These are all the landlords in {user.city}:</Typography>
                                )}
                            </Card> 
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>A
                                    </h1>
                                </div>
                                <Divider />
                                {aLandlords && (aLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>  
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>    
                                            </Typography>
                                            
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card> 
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>B</h1>
                                </div>
                                <Divider />
                                {bLandlords && (bLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card> 
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>C</h1>
                                </div>
                                <Divider />
                                {cLandlords && (cLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card> 
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>D</h1>
                                </div>
                                <Divider />
                                {dLandlords && (dLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card> 
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>E</h1>
                                </div>
                                <Divider />
                                {eLandlords && (eLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>F</h1>
                                </div>
                                <Divider />
                                {fLandlords && (fLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>G</h1>
                                </div>
                                <Divider />
                                {gLandlords && (gLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>H</h1>
                                </div>
                                <Divider />
                                {hLandlords && (hLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>I</h1>
                                </div>
                                <Divider />
                                {iLandlords && (iLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>J</h1>
                                </div>
                                <Divider />
                                {jLandlords && (jLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>K</h1>
                                </div>
                                <Divider />
                                {kLandlords && (kLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>L</h1>
                                </div>
                                <Divider />
                                {lLandlords && (lLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>M</h1>
                                </div>
                                <Divider />
                                {mLandlords && (mLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card> 
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>N</h1>
                                </div>
                                <Divider />
                                {nLandlords && (nLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>O</h1>
                                </div>
                                <Divider />
                                {oLandlords && (oLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>P</h1>
                                </div>
                                <Divider />
                                {pLandlords && (pLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>Q</h1>
                                </div>
                                <Divider />
                                {qLandlords && (qLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>R</h1>
                                </div>
                                <Divider />
                                {rLandlords && (rLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>S</h1>
                                </div>
                                <Divider />
                                {sLandlords && (sLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>T</h1>
                                </div>
                                <Divider />
                                {tLandlords && (tLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>U</h1>
                                </div>
                                <Divider />
                                {uLandlords && (uLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>V</h1>
                                </div>
                                <Divider />
                                {vLandlords && (vLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>W</h1>
                                </div>
                                <Divider />
                                {wLandlords && (wLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>X</h1>
                                </div>
                                <Divider />
                                {xLandlords && (xLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>Y</h1>
                                </div>
                                <Divider />
                                {yLandlords && (yLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>
                            <Card className={classes.rootLeft}>
                                <div className='letter-category'>
                                    <h1>Z</h1>
                                </div>
                                <Divider />
                                {zLandlords && (zLandlords.map(landlord => (
                                    <div className='list-card-content'>
                                        <CardContent>
                                            <Typography component="h1" className={classes.title}>
                                                <div className='list-card-name'>
                                                    <Link href={`/landlords/${landlord.id}`}>
                                                        {landlord.fullName}
                                                    </Link>
                                                </div>
                                                <div className='list-card-rating'>
                                                    <Rating name="read-only" value={landlord.rating} readOnly />
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                )))}
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => { window.location.href = '/addlandlord' }}
                                >
                                    Don't see your landlord? Add them here!
                                </Link>
                            </Card>  
                        </div>
                    </div>
                    
                        
                    {/* <div className='col-2-right'>
                        <div>
                            
                        </div>
                    </div> */}
                    
                </div>
                <div className='city-landlords-col-3'>

                </div>
                
            </div>
        </>      
    )
    
}

export default LandlordsInYourCity