import { CocktailsTypeData } from "../../../utils/cocktailsTypeData";
import CocktailsTypeItem from "../CoctailsTypeItem/CoctailsTypeItem";
import style from './CoctailsTypeList.module.scss';

type Props = {
  cocktailsType: CocktailsTypeData[];
}

const CoctailsTypeList: React.FC<Props> = ({ cocktailsType }) => {
  
  return (
    <ul className={style.list}>
      {cocktailsType.map(item => (
        <CocktailsTypeItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default CoctailsTypeList;