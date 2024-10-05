import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import IngridientsSection from "../components/IngridientsSection/IngridientsSection";
import { PagesTopBLock } from "../components/PagesTopBlock";

const IngridientsPage = () => {
  const [filterByCategory, setFilterByCategory] = useState('');

  return (
    <>
      <PagesTopBLock title='Ingredients' bgImage="/img/ShakeIngridients/ingridientsBG.jpg"/>
      <CategoryFilter setFilterByCategory={setFilterByCategory} />
      <IngridientsSection filterByCategory={filterByCategory} />
    </>
  );
};

export default IngridientsPage;