
import {combineReducers} from 'redux';
import characters from './characters_reducer';
import heroes from './heroes_reducer'


const rootReducer = combineReducers({
    characters:characters,
    heroes:heroes
})



export default rootReducer;
