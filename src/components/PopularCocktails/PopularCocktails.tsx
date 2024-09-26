import style from './PopularCocktails.module.scss';
import CocktailsCardList from '../shared/CocktailsCardList/CocktailsCardList';

const data = [
  {id: 0, name: 'Mojito', photo: 'img/cocktails/mojito.jpg'},
  {id: 1, name: 'SaltyDog', photo: 'img/cocktails/saltydog.jpg'}
]

const PopularCocktails = () => {
  return (
    <div className={`section ${style.wrapper}`}>
      <div className={`container ${style.box}`}>
        <h2 className={style.title}>We're currently drinking</h2>
          <CocktailsCardList coctailsCardList={data} />
      </div>
    </div>
  );
}

export default PopularCocktails;