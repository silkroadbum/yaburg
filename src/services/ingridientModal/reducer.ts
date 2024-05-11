import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IIngredientModalState } from "./types";
import { IBurgerIngridient } from "@/types/burger";

const initialState: IIngredientModalState = {
  ingridient: null
};

export const ingredientModalSlice = createSlice({
  name: "ingredientModal",
  initialState,
  reducers: {
    setIngredientModal: (state, { payload }: PayloadAction<IBurgerIngridient>) => {
      state.ingridient = payload;
    },
    removeIngredientModal: (state) => {
      state.ingridient = initialState.ingridient;
    }
  }
});

export const { setIngredientModal, removeIngredientModal } = ingredientModalSlice.actions;
