import { combineReducers } from '@reduxjs/toolkit'
import people from './peopleSlice'
import language from './languageSlice'
import filterReducer from "./filterSlice";
import characterReducer from "./characterSlice";

const reducer = combineReducers({
    people,
    language,
    filterReducer,
    characterReducer,
  })
  
  export default reducer;