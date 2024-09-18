import { TApiResponse } from "@/types/api-response.ts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOrderState } from "./types";
import { createOrder } from "./actions";
import { IOrderResponse } from "@/types/api-response";

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
      .addCase(createOrder.fulfilled, (state, { payload }: PayloadAction<TApiResponse<IOrderResponse>>) => {
        state.loading = false;
        state.error = null;
        state.order = payload;
      });
  }
});

export const { resetStateOrder } = orderSlice.actions;
