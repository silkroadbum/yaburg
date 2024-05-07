import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurgerConstructorState } from "./types";
import { IBurgerIngridient } from "@/types/burger";

const initialState: IBurgerConstructorState = {
  constructorIngridients: []
};

export const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredient(state, { payload }: PayloadAction<IBurgerIngridient>) {
      state.constructorIngridients.push(payload);
    },
    removeIngredient(state, { payload }: PayloadAction<string>) {
      state.constructorIngridients = state.constructorIngridients.filter((item) => item._id !== payload);
    }
  }
});

export const { addIngredient, removeIngredient } = burgerConstructorSlice.actions;
