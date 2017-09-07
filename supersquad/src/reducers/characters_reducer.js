import characters_json from '../data/characters.json';
import {ADD_CHARACTER} from '../actions';
import {REMOVE_CHARACTER} from '../actions'
export default function characters(state=characters_json,action){
    switch(action.type){
        case ADD_CHARACTER:
        let characters = state.filter(item=>item.id !=action.id);
        return characters;
        case REMOVE_CHARACTER:
        characters =[...state,createCharacter(action.id)]
        return characters;
        default:return state;
    }
}
function createCharacter(id){
    let character = characters_json.find((c)=>c.id===id);
    console.log('character');
    return character;
}
