import {combineReducers} from "redux";
import allBooks from "./books";
import filterReducer from './filter';
import cartReducer from './cart';

export default combineReducers({
    allBooks,
    filterReducer,
    cartReducer
})