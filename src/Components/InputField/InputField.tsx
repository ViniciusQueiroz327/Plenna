import React from "react";
import { FieldContainer, Label, Input } from "./style";

interface Props {
  label: string;
  placeholder: string;
  type: string;
}

const InputField: React.FC<Props> = ({ label, placeholder, type }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} />
    </FieldContainer>
  );
};

export { InputField };