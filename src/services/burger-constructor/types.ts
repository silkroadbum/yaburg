import { IBurgerIngridient } from "@/types/burger";

export interface IBurgerConstructorState {
  bun: IBurgerIngridient | null;
  ingredients: IBurgerIngridient[];
}
