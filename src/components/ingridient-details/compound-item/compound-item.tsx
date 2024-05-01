import { FC } from "react";
import styles from "./compound-item.module.scss";
import { ICompound } from "@/types/burger";

export interface IProps {
  compound: ICompound;
}

const CompoundItem: FC<IProps> = ({ compound }) => {
  return (
    <li className={styles.compound}>
      {compound.name}
      <span className="text text_type_digits-default">{compound.value}</span>
    </li>
  );
};

export default CompoundItem;
