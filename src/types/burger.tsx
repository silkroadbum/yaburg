export interface IBurgerIngridient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export enum BurgerIngridientsTypeEnum {
  BUN = "bun",
  MAIN = "main",
  SAUCE = "sauce"
}

export enum BunPositionEnum {
  TOP = "верх",
  BOTTOM = "низ"
}
