import style from './PopularCocktails.module.scss';
import CocktailsList from '../CocktailsList/CocktailsList';

const data = [
  {id: 0, name: 'Mojito', photo: 'img/cocktails/mojito.jpg'},
  {id: 1, name: 'SaltyDog', photo: 'img/cocktails/saltydog.jpg'}
]

const PopularCocktails = () => {
  return (
    <div className={`section ${style.wrapper}`}>
      <div className={`container ${style.box}`}>
        <h2 className={style.title}>We're currently drinking</h2>
          <CocktailsList cocktails={data} />
      </div>
    </div>
  );
}

export default PopularCocktails;