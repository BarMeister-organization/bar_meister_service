import { selectCocktailsError, selectCocktailsIsLoading } from "../../redux/cocktails/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchCocktails } from "../../redux/cocktails/operations";
import { selectVisibleCoctails } from "../../redux/searchFilter/selectors";
import Loader from "../../components/shared/Loader/Loader";
import style from './Cocktails.module.scss';
import CocktailsList from "../../components/CocktailsList/CocktailsList";

const CocktailsPage = () => {
  const cocktails = useAppSelector(selectVisibleCoctails);
  const error = useAppSelector(selectCocktailsError);
  const loading = useAppSelector(selectCocktailsIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCocktails({}));
  }, [dispatch]);

  return (
    <div className={`section ${style.wrapper}`}>
      <div className="container">
        {loading && <Loader />}
        {error && !loading && <p className="error">Can't load cocktails at the moment, please try again later</p>}
        {!loading && !error && !!cocktails.length && <CocktailsList cocktails={cocktails} />}
      </div>
    </div>
  );
}

export default CocktailsPage;