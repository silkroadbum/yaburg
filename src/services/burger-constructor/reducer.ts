import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBurgerConstructorState } from "./types";
import { BurgerIngridientsTypeEnum, IBurgerIngridient } from "@/types/burger";

const initialState: IBurgerConstructorState = {
  bun: null,
  ingredients: []
};

export const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredients(state, { payload }: PayloadAction<IBurgerIngridient>) {
      if (payload.type === BurgerIngridientsTypeEnum.BUN) {
        state.bun = payload;
        return;
      }
      state.ingredients.push(payload);
    },
    removeIngredients(state, { payload }: PayloadAction<string>) {
      state.ingredients = state.ingredients.filter((item) => item._id !== payload);
    },
    removeBun(state) {
      state.bun = null;
    }
  }
});

export const { addIngredients, removeIngredients, removeBun } = burgerConstructorSlice.actions;
