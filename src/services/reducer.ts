import { combineReducers } from "redux";
import { burgerIngridientsSlice } from "./burger-ingridients/reducer";

export const reducer = combineReducers({
  [burgerIngridientsSlice.reducerPath]: burgerIngridientsSlice.reducer
});
