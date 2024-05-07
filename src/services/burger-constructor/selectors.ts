import { RootState } from "../store";

export const selectConstructorIngridients = (state: RootState) => state.burgerConstructor.ingredients;

export const selectBunConstructor = (state: RootState) => state.burgerConstructor.bun;
