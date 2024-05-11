import { postOrder } from "@/utils/api-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk("order/createOrder", postOrder);
