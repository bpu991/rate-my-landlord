import { combineReducers } from "redux";
import { authentication } from "./authentication_reducer";
import { csrf } from "./csrf_reducer";
import entities from "./entities";
import errors from "./errors"
import search from './search';

const rootReducer = combineReducers({
    authentication,
    entities,
    csrf,
    errors,
    search
});

export default rootReducer;