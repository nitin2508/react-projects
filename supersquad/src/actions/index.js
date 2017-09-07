export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER ='REMOVE_CHARACTER';
export function addCharacterById(id){
    const action = {
        type:ADD_CHARACTER,
        id:id
    }
    return action;
}
export default addCharacterById;

export function removeCharacterById(id) {
    console.log('id');
    console.log(id);
    const action = {
        type:REMOVE_CHARACTER,
        id:id
    }

    return action;
}
