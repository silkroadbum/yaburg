import { IOrderResponse } from "@/types/api-response";

export interface IOrderState {
  order: IOrderResponse | null;
  loading: boolean;
  error: string | null | undefined;
}
