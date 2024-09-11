import IngridientDetails from "@/components/ingridient-details/ingridient-details";
import styles from "./ingredients.module.scss";

export const Ingredients = () => {
  return (
    <div className={styles.container}>
      <IngridientDetails />
    </div>
  );
};
