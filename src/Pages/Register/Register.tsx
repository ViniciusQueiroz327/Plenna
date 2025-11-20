import React from "react";
import { RegisterContainer } from "./style";

import { FormsHeader } from "../../Components/FormsHeader/FormsHeader";
import { RegisterBox } from "../../Components/RegisterBox/RegisterBox";
import { Footer } from "../../Components/Footer/Footer";

const Register: React.FC = () => {
  return (
    <RegisterContainer>
      <FormsHeader />
      <RegisterBox />
      <Footer />
    </RegisterContainer>
  );
};

export { Register };