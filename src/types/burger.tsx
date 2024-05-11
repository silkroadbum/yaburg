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

export interface IBurgerIngridientWithUniqKey extends IBurgerIngridient {
  uniqKey: string;
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

export interface ICompound {
  name: string;
  value: number;
}

export type ICompoundsList = ICompound[];
