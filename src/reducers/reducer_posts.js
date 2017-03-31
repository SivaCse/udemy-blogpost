import {FETCH_POSTS, FETCH_POST} from '../actions/index';
const INITIAL_STATE = {all: [], post: null};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            // returning a new state object
            // ...state basically says take current state, add it to the new state
            // and then add in the new data to the all property(the api response)
            return{...state, all: action.payload.data};
        case FETCH_POST:
            return{...state, post:action.payload.data};
        default:
            return state;
    }
}