import { Header } from "../../Components/Header/Header";
import { HeroCarousel } from "../../Components/HeroCarousel/HeroCarousel";
import { BestSellers } from "../../Components/BestSellers/BestSellers";
import { Footer } from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <BestSellers />
      <Footer />
    </>
  );
};

export { Home };