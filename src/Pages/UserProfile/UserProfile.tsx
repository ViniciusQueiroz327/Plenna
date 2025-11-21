import React, { useState } from "react";
import { Container, Layout, ContentArea, SidebarContainer } from "./style";

import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { ProfileSidebar } from "../../Components/ProfileSidebar/ProfileSidebar";
import { ProfileDetails } from "../../Components/ProfileDetails/ProfileDetails";
import { OrdersHistory } from "../../Components/OrdersHistory/OrdersHistory";
import { BookRegister } from "../../Components/BookRegister/BookRegister";
// import { SavedAddresses } from "../../Components/SavedAddresses/SavedAddresses";
// import { Settings } from "../../Components/Settings/Settings";

const UserProfile: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState("profile-details");

  const renderContent = () => {
    switch (activeComponent) {
      case "profile-details":
        return <ProfileDetails />;
      case "orders":
        return <OrdersHistory />;
      case "register-book":
        return <BookRegister />;
      // case "addresses":
      //   return <SavedAddresses />;
      // case "settings":
      //   return <Settings />;
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Layout>
          <SidebarContainer>
          <ProfileSidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
          </SidebarContainer>
          <ContentArea>
            {renderContent()}
          </ContentArea>
        </Layout>
      </Container>
      <Footer />
    </>
  );
};

export { UserProfile };