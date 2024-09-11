import { getIngridients } from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadIngridients = createAsyncThunk("ingridients/loadIngridients", getIngridients);
