import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    weather:WeatherReducer
    // books:BooksReducer,
    // activeBook:ActiveBook
});

export default rootReducer;
