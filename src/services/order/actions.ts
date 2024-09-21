import { api } from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk("order/createOrder", api.postOrder);
