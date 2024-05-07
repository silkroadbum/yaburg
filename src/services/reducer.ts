import { combineReducers } from "redux";
import { burgerIngridientsSlice } from "./burger-ingridients/reducer";
import { burgerConstructorSlice } from "./burger-constructor/reducer";
import { ingredientModalSlice } from "./ingridientModal/reducer";

export const reducer = combineReducers({
  [burgerIngridientsSlice.reducerPath]: burgerIngridientsSlice.reducer,
  [burgerConstructorSlice.reducerPath]: burgerConstructorSlice.reducer,
  [ingredientModalSlice.reducerPath]: ingredientModalSlice.reducer
});
