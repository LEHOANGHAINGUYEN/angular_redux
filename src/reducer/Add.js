
 import initialState from '../state/state.js';


var isAdd = (state = initialState, action) => {
    switch( action.type){
        case 'TOGGLE_STATUS':
         return {...state,isAdding: !state.isAdding}
         default:
             return state;
    }
}

export default isAdd;

