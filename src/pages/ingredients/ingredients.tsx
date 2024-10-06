import IngridientDetails from "@/components/ingridient-details/ingridient-details";
import styles from "./ingredients.module.scss";

const IngredientsPage = () => {
  return (
    <div className={styles.container}>
      <IngridientDetails />
    </div>
  );
};

export default IngredientsPage;
