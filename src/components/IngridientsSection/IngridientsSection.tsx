import React, { useEffect, useState } from "react";
import style from './IngridientsSection.module.scss';
import { popularComponents } from "../../utils/ingridients";
import IngridientsList from "../IngridientList/IngridientList";

interface Props {
  filterByCategory: string;
}

const IngridientsSection: React.FC<Props> = ({ filterByCategory }) => {
  const [filterPart, setFilterPart] = useState('');
  const [debouncedFilterPart, setDebouncedFilterPart] = useState(filterPart);
  const [components, setComponents] = useState(popularComponents);

  useEffect(() => {
    const filterComponents = () => {
      switch(filterByCategory) {
        case 'Mixer':
          setComponents(popularComponents.filter(ingr => ingr.ingridientCategory === 'Mixer'));
          break;
        case 'Spirit':
          setComponents(popularComponents.filter(ingr => ingr.ingridientCategory === 'Spirit'));
          break;
        case 'Wine':
          setComponents(popularComponents.filter(ingr => ingr.ingridientCategory === 'Wine and champagne'));
          break;
        case 'Liqueur':
          setComponents(popularComponents.filter(ingr => ingr.ingridientCategory === 'Liqueur'));
          break;
        case 'Beer':
          setComponents(popularComponents.filter(ingr => ingr.ingridientCategory === 'Beer'));
          break;
        case 'Other':
          setComponents(popularComponents.filter(ingr => ingr.ingridientCategory === 'Kitchen cupboard'));
          break;
        default:
          setComponents(popularComponents);
      }
    };

    filterComponents();
  }, [filterByCategory]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilterPart(filterPart);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [filterPart]);

  const visibleIngridients = components.filter(ingr =>
    ingr.componentName.toLowerCase().includes(debouncedFilterPart.toLowerCase())
  );

  return (
    <div className={style.block}>
      <div className={style.info}>
        <h3 className={style.title}>
          When it comes to making the perfect cocktail, having the right ingredients is key.
        </h3>
        <p className={style.subtitle}>
          Whether you're mixing up a classic martini or a trendy craft cocktail, the quality of your ingredients can make all the difference.
        </p>
        <p className={style.subtitle}>
          From fresh fruits and herbs to top-shelf spirits and unique mixers, the possibilities are endless. 
          So, the next time you're stocking your home bar, be sure to have a variety of cocktail ingredients on hand to create your favorite drinks and experiment with new recipes.
        </p>
      </div>
      <form className={style.form}>
        <input 
          className={style.input} 
          type="text" 
          placeholder="Search for an ingridient" 
          onChange={e => setFilterPart(e.target.value)}
        />
      </form>
      <IngridientsList visibleIngridients={visibleIngridients} />
    </div>
  );
};

export default IngridientsSection;