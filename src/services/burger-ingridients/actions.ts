import { api } from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadIngridients = createAsyncThunk("ingridients/loadIngridients", api.getIngridients);
