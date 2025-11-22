import { Header } from "../../Components/Header/Header";
import { HeroCarousel } from "../../Components/HeroCarousel/HeroCarousel";
import { BestSellers } from "../../Components/BestSellers/BestSellers";
import { Footer } from "../../Components/Footer/Footer";
import { PageContainer } from "../../Components/PageContainer/PageContainer";
import { DonateBookButton } from "../../Components/DonateBookButton/DonateBookButton";

const Home = () => {
  return (
    <>
      <Header />
      
      <PageContainer>
        <HeroCarousel />
        <BestSellers />

        <DonateBookButton/>
      </PageContainer>
      
      <Footer />
    </>
  );
};

export { Home };