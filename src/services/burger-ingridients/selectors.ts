import { RootState } from "./../store";

export const selectBurgerIngridientsStore = (state: RootState) => state.burgerIngridients;

export const selectIngridients = (state: RootState) => selectBurgerIngridientsStore(state).ingridients;

export const selectLoadingStatusIngridients = (state: RootState) => selectBurgerIngridientsStore(state).loading;

export const selectErrorStatusIngridients = (state: RootState) => selectBurgerIngridientsStore(state).error;
