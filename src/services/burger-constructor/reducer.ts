import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { IBurgerConstructorState } from "./types";
import { BurgerIngridientsTypeEnum, IBurgerIngridient, IBurgerIngridientWithUniqKey } from "@/types/burger";

const initialState: IBurgerConstructorState = {
  bun: null,
  ingredients: [],
  ingredientsCounter: {}
};

export const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredients: {
      reducer: (state, { payload }: PayloadAction<IBurgerIngridientWithUniqKey>) => {
        if (payload.type === BurgerIngridientsTypeEnum.BUN) {
          if (state.bun) {
            delete state.ingredientsCounter[state.bun._id];
          }
          state.bun = payload;
          state.ingredientsCounter[payload._id] = 2;
          return;
        }
        state.ingredients.push(payload);
        state.ingredientsCounter[payload._id] = (state.ingredientsCounter[payload._id] || 0) + 1;
      },
      prepare: (payload: IBurgerIngridient): { payload: IBurgerIngridientWithUniqKey } => {
        const uniqKey = nanoid();
        return { payload: { ...payload, uniqKey } };
      }
    },
    removeIngredients(state, { payload }: PayloadAction<string>) {
      const ingredientToRemove = state.ingredients.find((item) => item.uniqKey === payload);
      if (ingredientToRemove) {
        state.ingredients = state.ingredients.filter((item) => item.uniqKey !== payload);
        state.ingredientsCounter[ingredientToRemove._id] -= 1;
      }
    },
    removeBun(state) {
      state.bun = null;
    },
    resetStateConstructor(state) {
      state.bun = initialState.bun;
      state.ingredients = initialState.ingredients;
    },
    reorderIngredients(state, { payload }: PayloadAction<{ indexFrom: number; indexTo: number }>) {
      const ingredients = [...state.ingredients];
      const { indexFrom, indexTo } = payload;
      ingredients.splice(indexTo, 0, ingredients.splice(indexFrom, 1)[0]);
      state.ingredients = ingredients;
    }
  }
});

export const { addIngredients, removeIngredients, removeBun, reorderIngredients, resetStateConstructor } =
  burgerConstructorSlice.actions;
