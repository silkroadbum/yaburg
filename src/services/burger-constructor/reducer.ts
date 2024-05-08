import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { IBurgerConstructorState } from "./types";
import { BurgerIngridientsTypeEnum, IBurgerIngridient, IBurgerIngridientWithUniqKey } from "@/types/burger";

const initialState: IBurgerConstructorState = {
  bun: null,
  ingredients: []
};

export const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredients: {
      reducer: (state, { payload }: PayloadAction<IBurgerIngridientWithUniqKey>) => {
        if (payload.type === BurgerIngridientsTypeEnum.BUN) {
          state.bun = payload;
          return;
        }
        state.ingredients.push(payload);
      },
      prepare: (payload: IBurgerIngridient): { payload: IBurgerIngridientWithUniqKey } => {
        const uniqKey = nanoid();
        return { payload: { ...payload, uniqKey } };
      }
    },
    removeIngredients(state, { payload }: PayloadAction<string>) {
      state.ingredients = state.ingredients.filter((item) => item.uniqKey !== payload);
    },
    removeBun(state) {
      state.bun = null;
    }
  }
});

export const { addIngredients, removeIngredients, removeBun } = burgerConstructorSlice.actions;
