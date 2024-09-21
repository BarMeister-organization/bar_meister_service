import { CustomShake } from "../components/CustomShake";
import { FilterByComponents } from "../components/FilterByComponents";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FilterByComponents />
      <CustomShake />
    </>
  );
}

export default HomePage;