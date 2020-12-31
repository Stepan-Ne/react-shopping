import {combineReducers} from "redux";
import allBooks from "./books";
import filterReducer from './filter';


export default combineReducers({
    allBooks,
    filterReducer
})