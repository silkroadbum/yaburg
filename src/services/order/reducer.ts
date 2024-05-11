import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOrder, IOrderState } from "./types";
import { createOrder } from "./actions";

const initialState: IOrderState = {
  order: null,
  loading: false,
  error: null
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetStateOrder(state) {
      state.order = initialState.order;
      state.loading = initialState.loading;
      state.error = initialState.error;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.order = null;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createOrder.fulfilled, (state, { payload }: PayloadAction<IOrder>) => {
        state.loading = false;
        state.error = null;
        state.order = payload;
      });
  }
});

export const { resetStateOrder } = orderSlice.actions;
