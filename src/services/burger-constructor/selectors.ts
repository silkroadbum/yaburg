import { RootState } from "../store";

export const selectConstructorIngridients = (state: RootState) => state.burgerConstructor.constructorIngridients;
