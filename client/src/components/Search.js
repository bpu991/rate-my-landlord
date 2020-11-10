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
import searchLandlords  from "../actions/search_actions";
import {getAllLandlords} from "../actions/landlord_actions";

const useStyles = makeStyles((theme) => ({
    space: {
        marginTop: 100,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        marginBottom: 15
    }
}));

const Search = () => {
    // const classes = useStyles();
    // const landlords = useSelector(state => state.entities.landlordPages.fullName);
    // const [searchTarget, setSearchTarget] = useState("");
    // // const [suggestions, setSuggestion] = useState([])
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(searchLandlords())
    // }, [dispatch])

    // const handleSearch = (e) => {
    //     setSearchTarget(e.target.value)
    //     // setSuggestion([])
    //     // const searchResults = {
    //     //     search
    //     // }
    //     dispatch(searchLandlords(e.target.value));
    // };

    // return (
    //     // <Container component='main' maxWidth='xs'>
    //     //     <div className={classes.space}>
    //     //         <form onChange={handleSubmit}>
    //     //             <TextField
    //     //                 variant='outlined'
    //     //                 margin='normal'
    //     //                 fullWidth
    //     //                 id='search'
    //     //                 label='Search for landlord'
    //     //                 name='search'
    //     //                 autoComplete='title'
    //     //                 autoFocus
    //     //                 value={search}
    //     //                 onChange={(e) => setSearch(e.target.value)}
    //     //             />
    //     //         </form>
    //     //     </div>
    //     // </Container>
    //     <h1>Hi</h1>
    // )
    const [input, setInput] = useState('')
    const suggestions = useSelector(state => state.search)
    const landlord = useSelector(state => state.entities.landlordPages.landlords);
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
            <div className="search-component-container">
                <input type="search" onChange={handleInput} value={input} id="search" placeholder="Search" autocomplete="off"></input>
                <div className="search-bar-choices-container">
                    {suggestions.map(suggestion =>
                        <div className="searchbar-choice-div" key={suggestion.id}>
                            <a className="searchbar-choice-link" href={`/landlords/${suggestion.id}`}>{suggestion.fullName}</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Search