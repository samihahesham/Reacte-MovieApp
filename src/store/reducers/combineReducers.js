import {combineReducers} from "redux";
import favoriteRed from './favorites';
import moviesRed from './get_movies' ;


export default combineReducers({
    Favorite_Reducer: favoriteRed,
    Movies_Reducer: moviesRed,
});