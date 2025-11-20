import React from "react";
import { LoginContainer } from "./style";

import { FormsHeader } from "../../Components/FormsHeader/FormsHeader";
import { LoginBox } from "../../Components/LoginBox/LoginBox";
import { Footer } from "../../Components/Footer/Footer";

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <FormsHeader />
      <LoginBox />
      <Footer />
    </LoginContainer>
  );
};

export { Login };