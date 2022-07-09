//import './App.css';
import React, { useState } from "react";
import AppContainer from "./AppContainer/AppContainer";
import ProfilePage from "./ProfilePage/ProfilePage";
import TelaMatches from "./TelaMatches/MatchList";

function TelaInicial () {
  const [selectedPage, setSelectedPage] = useState("choose-profile");

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "choose-profile":
        return < ProfilePage/>;
      case "match-list":
        return <TelaMatches/>;
      default:
        return <ProfilePage/>;
    }
  };

  const goToChooseProfilePage = () => {
    setSelectedPage("choose-profile");
  };

  const goToMacthListPage = () => {
    setSelectedPage("match-list");
  };

  return (
    <div>
      <AppContainer
        goToChooseProfilePage={goToChooseProfilePage}
        goToMacthListPage={goToMacthListPage}
      />
      {renderSelectedPage()}
    </div>
  );
}

export default TelaInicial;