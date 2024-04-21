import { FC } from "react";
import cn from "classnames";
import { IBurgerIngridient, ICompoundsList } from "@/types/burger";
import styles from "./ingridient-details.module.scss";
import CompoundItem from "./compound-item/compound-item";

interface IProps {
  ingridient: IBurgerIngridient;
}

const IngridientDetails: FC<IProps> = ({ ingridient }) => {
  const compoundList: ICompoundsList = [
    { name: "Калории,ккал", value: ingridient.calories },
    { name: "Белки, г", value: ingridient.proteins },
    { name: "Жиры, г", value: ingridient.fat },
    { name: "Углеводы, г", value: ingridient.carbohydrates }
  ];

  return (
    <div className={styles.ingridient}>
      <img className="mb-4" src={ingridient.image_large} alt={ingridient.name} />
      <h2 className={cn("text text_type_main-medium mb-8", styles.title)}>{ingridient.name}</h2>
      <ul className={cn("text text_type_main-default text_color_inactive", styles.compound_list)}>
        {compoundList.map((el) => (
          <CompoundItem key={el.name} compound={el} />
        ))}
      </ul>
    </div>
  );
};

export default IngridientDetails;
