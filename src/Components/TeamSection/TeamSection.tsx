import React from "react";
import { TeamContainer, TeamGrid, TeamCard } from "./style";

const TeamSection: React.FC = () => {
  return (
    <TeamContainer>
      <h2>Nosso Time</h2>

      <TeamGrid>
        <TeamCard>
          <img src="/assets/team/Breno_Marcelo.png" />
          <h3>Breno Marcelo</h3>
          <p>CEO & Fundador</p>
        </TeamCard>

        <TeamCard>
          <img src="/assets/team/Davi_Macedo.png" />
          <h3>Davi Macedo</h3>
          <p>CEO & Fundador</p>
        </TeamCard>

        <TeamCard>
          <img src="/assets/team/Guilherme_Esteves.png" />
          <h3>Guilher Esteves</h3>
          <p>CEO & Fundador</p>
        </TeamCard>

        <TeamCard>
          <img src="/assets/team/Vinicius_Queiroz.png" />
          <h3>Vinicius Queiroz</h3>
          <p>CEO & Fundador</p>
        </TeamCard>

        <TeamCard>
          <img src="/assets/team/Vitoria_Magar.png" />
          <h3>Vitoria Magar</h3>
          <p>CEO & Fundador</p>
        </TeamCard>
      </TeamGrid>
    </TeamContainer>
  );
};

export { TeamSection };
