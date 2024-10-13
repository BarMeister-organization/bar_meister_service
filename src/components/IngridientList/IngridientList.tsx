import React from "react";
import style from './IngridientList.module.scss';
import { Ingridients } from "../../types/componentsType";
import IngridientItem from "../IngridientItem/IngridientItem";

interface Props {
  visibleIngridients: Ingridients[];
}

const IngridientsList: React.FC<Props> = ({ visibleIngridients }) => {
  return (
    <div className={style.list}>
      {visibleIngridients.map(ingridient => (
        <IngridientItem ingridient={ingridient} key={ingridient.componentName}/>
      ))}
    </div>
  );
};

export default React.memo(IngridientsList);