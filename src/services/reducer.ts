import { combineReducers } from "redux";
import { burgerIngridientsSlice } from "./burger-ingridients/reducer";
import { burgerConstructorSlice } from "./burger-constructor/reducer";
import { orderSlice } from "./order/reducer";
import { userSlice } from "./user/reducer";

export const reducer = combineReducers({
  [burgerIngridientsSlice.reducerPath]: burgerIngridientsSlice.reducer,
  [burgerConstructorSlice.reducerPath]: burgerConstructorSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
  [orderSlice.reducerPath]: orderSlice.reducer
});
