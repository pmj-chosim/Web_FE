import React from "react";

import MenuBar from "../Bar/MenuBar.jsx";
import DashboardComponent from "../Components/MyPage/DashboardComponent.jsx";
import UserInfoComponent from "../Components/MyPage/UserInfoComponent.jsx";
import AnaylsisResultComponenet from "../Components/MyPage/AnaylsisResultComponenet.jsx";

const PersonalPage = () => {
  return (
    <div>
      <MenuBar />
      <UserInfoComponent />
      <DashboardComponent />
      <AnaylsisResultComponenet />
    </div>
  );
};

export default PersonalPage;
