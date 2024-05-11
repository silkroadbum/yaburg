import { RootState } from "../store";

export const selectOrder = (state: RootState) => state.order.order;

export const selectLoadingStatusOrder = (state: RootState) => state.order.loading;
