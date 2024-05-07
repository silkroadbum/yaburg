import { RootState } from "../store";

export const selectBurgerConstructor = (state: RootState) => state.burgerConstructor;

export const selectConstructorIngridients = (state: RootState) => selectBurgerConstructor(state).ingredients;

export const selectBunConstructor = (state: RootState) => selectBurgerConstructor(state).bun;
