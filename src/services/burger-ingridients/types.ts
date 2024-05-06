import { IBurgerIngridient } from "@/types/burger";

export interface IBurgerIngridientsStore {
  ingridients: IBurgerIngridient[];
  loading: boolean;
  error: string | null | undefined;
}

export interface IBurgerIngridientsResponse {
  success: boolean;
  data: IBurgerIngridient[];
}
