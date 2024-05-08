import { IBurgerIngridientWithUniqKey } from "@/types/burger";

export interface IBurgerConstructorState {
  bun: IBurgerIngridientWithUniqKey | null;
  ingredients: IBurgerIngridientWithUniqKey[];
}
