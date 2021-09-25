import { combineReducers } from "redux";
import isAdd from './Add.js';
import addItem from './AddItem.js'
export default combineReducers({
      isAdd: isAdd,
      addItem:addItem
    
})