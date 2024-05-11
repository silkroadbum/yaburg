export interface IOrder {
  name: string;
  order: {
    number: number;
  };
  success: boolean;
}

export interface IOrderState {
  order: IOrder | null;
  loading: boolean;
  error: string | null | undefined;
}
