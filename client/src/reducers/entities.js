import { combineReducers } from 'redux';
import cities from './cities';
import landlordPages from './landlordPages';
import reviews from './reviews';
import getLandlordInfo from './getLandlordInfo';
import search from './search';

const entitiesReducer = combineReducers({
    cities,
    landlordPages,
    reviews
    // getLandlordInfo
});

export default entitiesReducer;