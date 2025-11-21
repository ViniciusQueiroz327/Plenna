import React from "react";
import { FieldContainer, Label, Input } from "./style";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({ label, placeholder, type, value, onChange }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </FieldContainer>
  );
};

export { InputField };