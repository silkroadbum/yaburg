import { FC } from "react";
import { IBurgerIngridient } from "@/types/burger";
import IngridientsItem from "./ingridients-item/ingridients-item";
import styles from "./ingridients-list.module.scss";

interface IProps {
  title: string;
  ingridients: IBurgerIngridient[];
}

const IngridientsList: FC<IProps> = ({ title, ingridients }) => {
  return (
    <div className="mb-10 pr-4 pl-4">
      <h3 className="text text_type_main-medium mb-6">{title}</h3>
      <ul className={styles.ingridients_list}>
        {ingridients.map((ingridient) => (
          <IngridientsItem key={ingridient._id} ingridient={ingridient} />
        ))}
      </ul>
    </div>
  );
};

export default IngridientsList;
