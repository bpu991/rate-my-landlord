import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import searchLandlords  from "../actions/search_actions";
import {getAllLandlords} from "../actions/landlord_actions";
import "../css-styles/search-bar.css"
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 274.9,
        maxHeight: 100,
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
}));

const Search = () => {
    const classes = useStyles();
    const [input, setInput] = useState('')
    const suggestions = useSelector(state => state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllLandlords())
    }, [dispatch])

    const handleInput = async (e) => {
        setInput(e.target.value);

        if (input.length > 1 ) {
            dispatch(searchLandlords(e.target.value));
        }
        
    }

    return (
        <>
            <div className="search-bar">
                <input className="searchbar-input" type="search" name="search" onChange={handleInput} value={input} id="search" placeholder="Search for landlord ... 🔎" autocomplete="off" required />
                    <div className="search-btn" >
                        {suggestions.map(suggestion =>
                        <Card className={classes.root} square={true}>
                            <div className='search-suggestion'>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary">
                                        <Link href={`/landlords/${suggestion.id}`}>
                                            {suggestion.fullName}, {suggestion.city}
                                        </Link>
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                        )}
                    </div>
            </div>     
            
        </>
    );
}

export default Search