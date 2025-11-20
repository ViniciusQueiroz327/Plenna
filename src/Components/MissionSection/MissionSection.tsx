import React from "react";
import { MissionContainer, MissionGrid } from "./style";
import { MissionItem } from "../MissionItem/MissionItem";

const MissionSection: React.FC = () => {
  return (
    <MissionContainer>
      <h2>Nossa Missão</h2>

      <MissionGrid>
        <MissionItem
          title="Inspirar a Leitura"
          description="Curadoria de livros que mudam vidas."
          icon="/assets/icons/book.png"
        />
        <MissionItem
          title="Educação"
          description="Aprendizado acessível e contínuo."
          icon="/assets/icons/people.png"
        />
        <MissionItem
          title="Crescimento"
          description="Conhecimento como ferramenta de evolução."
          icon="/assets/icons/personal-development.png"
        />
      </MissionGrid>
    </MissionContainer>
  );
};

export { MissionSection };
