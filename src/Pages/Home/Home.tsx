import { Header } from "../../Components/Header/Header";
import { HeroCarousel } from "../../Components/HeroCarousel/HeroCarousel";
import { BestSellers } from "../../Components/BestSellers/BestSellers";
import { Footer } from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <Header />
      </header>
      <div className="carousel">
        <HeroCarousel />
      </div>
      <main className="main">
        <BestSellers />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export { Home };