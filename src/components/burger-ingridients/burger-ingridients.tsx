import { FC, useMemo, useRef, useState } from "react";
import cn from "classnames";
import TabPanel from "./tab-panel/tab-panel";
import IngridientsList from "./ingridients-list/ingridients-list";
import styles from "./burger-ingridients.module.scss";
import { BurgerIngridientsTypeEnum, IBurgerIngridient } from "@/types/burger";
import { useModal } from "@/hooks/useModal";
import Modal from "../modal/modal";
import IngridientDetails from "../ingridient-details/ingridient-details";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { selectIngridients } from "@/services/burger-ingridients/selectors";
import { selectIngridientModal } from "@/services/ingridientModal/selectors";
import { removeIngredientModal } from "@/services/ingridientModal/reducer";

interface IIngridientsList {
  title: string;
  ingridients: IBurgerIngridient[];
  ref: React.RefObject<HTMLDivElement>;
}

const BurgerIngridients: FC = () => {
  const ingridients = useAppSelector(selectIngridients);
  const [activeTab, setActiveTab] = useState<string>(BurgerIngridientsTypeEnum.BUN);
  const { isModalOpen, openModal, closeModal } = useModal();
  const ingridientModal = useAppSelector(selectIngridientModal);
  const dispatch = useAppDispatch();
  const tabsRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

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
      ingridients: bunIngridients,
      ref: bunRef
    },
    {
      title: "Соусы",
      ingridients: sauseIngridients,
      ref: sauceRef
    },
    {
      title: "Начинки",
      ingridients: mainIngridients,
      ref: mainRef
    }
  ];

  const handleScroll = () => {
    const tabBottomPosition = tabsRef.current?.getBoundingClientRect().bottom;
    const bunTopPosition = bunRef.current?.getBoundingClientRect().top || 0;
    const sauceTopPosition = sauceRef.current?.getBoundingClientRect().top || 0;
    const mainTopPosition = mainRef.current?.getBoundingClientRect().top || 0;
    const distances = [
      {
        type: BurgerIngridientsTypeEnum.BUN,
        distance: Math.abs(tabBottomPosition! - bunTopPosition)
      },
      {
        type: BurgerIngridientsTypeEnum.SAUCE,
        distance: Math.abs(tabBottomPosition! - sauceTopPosition)
      },
      {
        type: BurgerIngridientsTypeEnum.MAIN,
        distance: Math.abs(tabBottomPosition! - mainTopPosition)
      }
    ];

    const closestTab = distances.find((item) => item.distance === Math.min(...distances.map((item) => item.distance)));

    setActiveTab(closestTab!.type);
  };

  const onClickCloseModal = () => {
    closeModal();
    dispatch(removeIngredientModal());
  };

  return (
    <section className={cn("mt-10", styles.ingridients)}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <TabPanel activeTab={activeTab} onClick={setActiveTab} ref={tabsRef} />
      <ul className={cn("custom-scroll", styles.ingridients_lists)} onScroll={handleScroll}>
        {ingridientsList.map(({ title, ingridients, ref }) => (
          <li key={title}>
            <IngridientsList title={title} ingridients={ingridients} openModal={openModal} ref={ref} />
          </li>
        ))}
      </ul>
      {isModalOpen && ingridientModal && (
        <Modal header="Детали ингредиента" onClose={onClickCloseModal}>
          <IngridientDetails ingridient={ingridientModal} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngridients;
