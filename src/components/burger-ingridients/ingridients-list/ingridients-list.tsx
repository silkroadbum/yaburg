import { forwardRef } from "react";
import { IBurgerIngridient } from "@/types/burger";
import IngridientsItem from "./ingridients-item/ingridients-item";
import styles from "./ingridients-list.module.scss";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "@/constants/router";

interface IProps {
  title: string;
  ingridients: IBurgerIngridient[];
}

const IngridientsList = forwardRef<HTMLDivElement, IProps>(({ title, ingridients }, ref) => {
  const location = useLocation();
  return (
    <div className="mb-10 mr-2 ml-2" ref={ref}>
      <h3 className="text text_type_main-medium mb-6">{title}</h3>
      <ul className={styles.ingridients_list}>
        {ingridients.map((ingridient) => (
          <Link
            className={styles.link}
            to={`${AppRoutes.INGREDIENTS}/${ingridient._id}`}
            state={{ backgroundLocation: location }}
            key={ingridient._id}
          >
            <IngridientsItem ingridient={ingridient} />
          </Link>
        ))}
      </ul>
    </div>
  );
});

export default IngridientsList;
