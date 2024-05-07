import { FC, useMemo, useState } from "react";
import cn from "classnames";
import TabPanel from "./tab-panel/tab-panel";
import IngridientsList from "./ingridients-list/ingridients-list";
import styles from "./burger-ingridients.module.scss";
import { BurgerIngridientsTypeEnum, IBurgerIngridient } from "@/types/burger";
import { useModal } from "@/hooks/useModal";
import Modal from "../modal/modal";
import IngridientDetails from "../ingridient-details/ingridient-details";
import { useAppSelector } from "@/services/hooks";
import { selectIngridients } from "@/services/burger-ingridients/selectors";
import { selectIngridientModal } from "@/services/ingridientModal/selectors";

interface IIngridientsList {
  title: string;
  ingridients: IBurgerIngridient[];
}

const BurgerIngridients: FC = () => {
  const ingridients = useAppSelector(selectIngridients);
  const [activeTab, setActiveTab] = useState<string>(BurgerIngridientsTypeEnum.BUN);
  const { isModalOpen, openModal, closeModal } = useModal();
  const ingridientModal = useAppSelector(selectIngridientModal);

  const bunIngridients = useMemo(() => {
    return ingridients.filter((item) => item.type === BurgerIngridientsTypeEnum.BUN);
  }, [ingridients]);

  const sauseIngridients = useMemo(() => {
    return ingridients.filter((item) => item.type === BurgerIngridientsTypeEnum.SAUCE);
  }, [ingridients]);

  const mainIngridients = useMemo(() => {
    return ingridients.filter((item) => item.type === BurgerIngridientsTypeEnum.MAIN);
  }, [ingridients]);

  const ingridientsList: IIngridientsList[] = [
    {
      title: "Булки",
      ingridients: bunIngridients
    },
    {
      title: "Соусы",
      ingridients: sauseIngridients
    },
    {
      title: "Начинки",
      ingridients: mainIngridients
    }
  ];

  return (
    <section className={cn("mt-10", styles.ingridients)}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <TabPanel activeTab={activeTab} onClick={setActiveTab} />
      <ul className={cn("custom-scroll", styles.ingridients_lists)}>
        {ingridientsList.map(({ title, ingridients }, index) => (
          <li key={index}>
            <IngridientsList title={title} ingridients={ingridients} openModal={openModal} />
          </li>
        ))}
      </ul>
      {isModalOpen && ingridientModal && (
        <Modal header="Детали ингредиента" onClose={closeModal}>
          <IngridientDetails ingridient={ingridientModal} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngridients;
