import { postOrder } from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk("order/createOrder", postOrder);
