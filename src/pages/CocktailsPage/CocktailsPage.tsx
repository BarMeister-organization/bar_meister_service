import { selectCocktailsError, selectCocktailsIsLoading } from "../../redux/cocktails/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchCocktails } from "../../redux/cocktails/operations";
import { selectVisibleCoctails } from "../../redux/searchFilter/selectors";
import Loader from "../../components/shared/Loader/Loader";
import style from './CocktailsPage.module.scss';
import CocktailsList from "../../components/CocktailsList/CocktailsList";
import { PagesTopBLock } from "../../components/PagesTopBlock";
import { Link } from "react-router-dom";
import CoctailsTypeList from "../../components/CoctailsType/CoctailsTypeList/CoctailsTypeList";
import { cocktailsTypeData } from "../../utils/cocktailsTypeData";
import PopularCocktails from "../../components/PopularCocktails/PopularCocktails";
import { FilterByComponents } from "../../components/FilterByComponents";
import CocktailItem from "../../components/CocktailItem/CocktailItem";

const CocktailsPage = () => {
  const cocktails = useAppSelector(selectVisibleCoctails);
  const error = useAppSelector(selectCocktailsError);
  const loading = useAppSelector(selectCocktailsIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCocktails({}));
  }, [dispatch]);

  return (
    <>
    <PagesTopBLock title={'Cocktails'} bgImage={'img/cocktailsPage/cocktailsBanner.webp'} />
    <div className={`section ${style.wrapper}`}>
      <div className={`container ${style.box}`}>
        <div className={style.recommBox}>
          <h2 className={style.recommTitle}>Recommended</h2>
          <Link to={'/'}>
            <div className={style.recommCocktail}>
              <div className={style.info}>
                <h3 className={style.name}>Pink Squirrel</h3>
                <p className={style.descr}>
                  The Pink Squirrel is a creamy, indulgent cocktail that has been around since the 1950s. 
                  It is believed to have originated in...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className={style.explore}>
          <h3 className={style.recommTitle}>Explore some of our famous recipe</h3>
          <CoctailsTypeList cocktailsType={cocktailsTypeData} />
        </div>
        <div className={style.trend}>
          <h3 className={style.trendTitle}>Currently trending</h3>
          <p >
          Check out some of these cocktails that are trending on our site. What's currently going down based on our lovely users!
          </p>
          {loading && <Loader />}
          {error && !loading && <p className="error">Can't load cocktails at the moment, please try again later</p>}
          {!loading && !error && !!cocktails.length && (
            <ul className={style.list}>
            {cocktails.map(cocktail => (
              <CocktailItem cocktail={cocktail} key={cocktail.id} isCocktailsPage={true} />
            ))}
          </ul>
          )}
        </div>
      </div>
      <PopularCocktails />
      <FilterByComponents />
    </div>
    </>
  );
}

export default CocktailsPage;