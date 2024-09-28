import { CustomShake } from "../components/CustomShake";
import { FilterByComponents } from "../components/FilterByComponents";
import Hero from "../components/Hero/Hero";
import PopularCocktails from "../components/PopularCocktails/PopularCocktails";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FilterByComponents />
      <CustomShake />
      <PopularCocktails />
    </>
  );
}

export default HomePage;