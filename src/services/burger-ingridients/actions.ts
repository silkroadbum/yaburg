import { getIngridients } from "@/utils/api-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadIngridients = createAsyncThunk("ingridients/loadIngridients", getIngridients);
