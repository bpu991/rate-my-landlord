import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import searchLandlords  from "../actions/search_actions";
import {getAllLandlords} from "../actions/landlord_actions";
import "../css-styles/search-bar.css"
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
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
        setInput(e.target.value)
        dispatch(searchLandlords(e.target.value))
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
                                            {suggestion.fullName}
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