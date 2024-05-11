import { createSlice } from "@reduxjs/toolkit";
import { loadIngridients } from "./actions";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBurgerIngridientsResponse, IBurgerIngridientsState } from "./types";

const initialState: IBurgerIngridientsState = {
  ingridients: [],
  loading: false,
  error: null
};

export const burgerIngridientsSlice = createSlice({
  name: "burgerIngridients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadIngridients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadIngridients.rejected, (state, action) => {
        state.ingridients = [];
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadIngridients.fulfilled, (state, action: PayloadAction<IBurgerIngridientsResponse>) => {
        state.loading = false;
        state.ingridients = action.payload.data;
      });
  }
});
