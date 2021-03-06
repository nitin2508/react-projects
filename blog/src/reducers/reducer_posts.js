import {FETCH_POSTS,FETCH_POST} from '../actions';
import _ from 'lodash';

export default function(state={},action){
    switch(action.type){
        case FETCH_POST:
        // const post = action.payload.data;
        // const newState = {...state};
        // newState[post.id] = post;
        // return  newState;
        // console.log(...state);
        // console.log(action);
        return action.payload.data;
        case FETCH_POSTS:return _.mapKeys(action.payload.data,'id');
        default:return state;

    }

}
