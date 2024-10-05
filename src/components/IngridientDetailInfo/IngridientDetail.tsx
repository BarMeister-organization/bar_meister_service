import { useParams } from 'react-router-dom';
import style from './IngridientDetail.module.scss';
import { popularComponents } from '../../utils/ingridients';
import { PagesTopBLock } from '../PagesTopBlock';

const IngridientDetail = () => {
  const { paramsIngredient } = useParams<{ paramsIngredient: string }>();
  const ingredient = popularComponents.find(ingr => ingr.ingridientName === paramsIngredient);

  return (
    ingredient ? (
      <div className={style.block}>
        <PagesTopBLock title={ingredient.componentName} bgImage={ingredient.ingridientBackgroundImg} />
        <div className={style.content}>
          <p className={style.description}>{ingredient.ingridientDescription}</p>
          <div className={style.info}>
            <ul className={style.list}>
              <li className={style.item}>
                <p className={style.text}>Category</p>
                <span className={style.dots}></span>
                <p className={style.text}>{`${ingredient.ingridientCategory} > ${ingredient.componentName}`}</p>
              </li>
              {ingredient.ingridientOrigin && (
                <li className={style.item}>
                  <p className={style.text}>Origin</p>
                  <span className={style.dots}></span>
                  <p className={style.text}>{ingredient.ingridientOrigin}</p>
                </li>
              )}
              {ingredient.ingridientInvented && (
                <li className={style.item}>
                  <p className={style.text}>Invented</p>
                  <span className={style.dots}></span>
                  <p className={style.text}>{ingredient.ingridientInvented}</p>
                </li>
              )}
              <li className={style.item}>
                <p className={style.text}>Strength</p>
                <span className={style.dots}></span>
                <p className={style.text}>{ingredient.ingridientStrenght}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <p>Ingredient not found</p>
    )
  );
};

export default IngridientDetail;