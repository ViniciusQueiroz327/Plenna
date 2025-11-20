import React from "react";
import { ItemBox } from "./style";

interface MissionItemProps {
  title: string;
  description: string;
  icon: string;
}

const MissionItem: React.FC<MissionItemProps> = ({ title, description, icon }) => {
  return (
    <ItemBox>
      <img src={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </ItemBox>
  );
};

export { MissionItem };
