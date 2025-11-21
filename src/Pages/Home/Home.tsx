import { Header } from "../../Components/Header/Header";
import { HeroCarousel } from "../../Components/HeroCarousel/HeroCarousel";
import { BestSellers } from "../../Components/BestSellers/BestSellers";
import { Footer } from "../../Components/Footer/Footer";
import { PageContainer } from "../../Components/PageContainer/PageContainer";

const Home = () => {
  return (
    <>
      <Header />
      
      <PageContainer>
        <HeroCarousel />
        <BestSellers />
      </PageContainer>
      
      <Footer />
    </>
  );
};

export { Home };