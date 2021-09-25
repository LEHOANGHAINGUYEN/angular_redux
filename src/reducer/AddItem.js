import initialState from '../state/state.js';

var addItem=(state = initialState, action) => {
    switch( action.type){
        case 'ADD_PRODUCT':
         return {...state,mang:[...state.mang,action.item]}
         default:
             return state;
    }
}
export default addItem;