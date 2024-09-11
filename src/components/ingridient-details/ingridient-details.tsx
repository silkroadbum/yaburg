import { FC } from "react";
import cn from "classnames";
import { ICompoundsList } from "@/types/burger";
import styles from "./ingridient-details.module.scss";
import CompoundItem from "./compound-item/compound-item";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/services/hooks";
import { selectIngridients } from "@/services/burger-ingridients/selectors";
import { NotFound } from "@/pages/not-found/not-found";

const IngridientDetails: FC = () => {
  const { id } = useParams();
  const ingredients = useAppSelector(selectIngridients);
  const ingredient = ingredients.find((ingredient) => ingredient._id === id);

  if (!ingredient) return <NotFound />;

  const compoundList: ICompoundsList = [
    { name: "Калории,ккал", value: ingredient.calories },
    { name: "Белки, г", value: ingredient.proteins },
    { name: "Жиры, г", value: ingredient.fat },
    { name: "Углеводы, г", value: ingredient.carbohydrates }
  ];

  return (
    <div className={styles.ingridient}>
      <img className="mb-4" src={ingredient.image_large} alt={ingredient.name} />
      <h2 className={cn("text text_type_main-medium mb-8", styles.title)}>{ingredient.name}</h2>
      <ul className={cn("text text_type_main-default text_color_inactive", styles.compound_list)}>
        {compoundList.map((el) => (
          <CompoundItem key={el.name} compound={el} />
        ))}
      </ul>
    </div>
  );
};

export default IngridientDetails;
