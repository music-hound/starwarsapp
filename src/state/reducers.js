import { combineReducers } from '@reduxjs/toolkit'
import people from './peopleSlice'
import language from './languageSlice'
import filterReducer from "./filterSlice";

const reducer = combineReducers({
    people,
    language,
    filterReducer,
  })
  
  export default reducer;