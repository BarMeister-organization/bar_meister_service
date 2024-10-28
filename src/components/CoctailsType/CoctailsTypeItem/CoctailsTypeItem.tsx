import { Link } from "react-router-dom";
import { CocktailsTypeData } from "../../../utils/cocktailsTypeData";
import style from './CoctailsTypeItem.module.scss';

type Props = {
  item: CocktailsTypeData;
}

const CocktailsTypeItem: React.FC<Props> = ({ item }) => {
  return (
    <li className={style.wrapper}>
      <Link to={item.link} className={style.card} >
        <img src={item.photo} alt={item.name} className={style.img} />
        <div className={style.info}>
          <h3 className={style.name}>{item.name}</h3>
          <p className={style.descr}>{item.description}</p>
        </div>
      </Link>
    </li>
  )
};

export default CocktailsTypeItem;