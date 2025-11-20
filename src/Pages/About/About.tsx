import React from "react";
import { HistorySection } from "../../Components/HistorySection/HistorySection";
import { MissionSection } from "../../Components/MissionSection/MissionSection";
import { TeamSection } from "../../Components/TeamSection/TeamSection";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <HistorySection />
      <MissionSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export { About };
