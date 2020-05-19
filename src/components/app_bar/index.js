import React from "react";
import { useNavigation } from "@react-navigation/native";
import AppBarView from "./view";

import { deleteUser } from "../../utils/utils";

const AppBar = ({ hidden, showSignOut }) => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  async function signOut() {
    await deleteUser();
    navigation.navigate("load");
  }

  return (
    <AppBarView
      goBack={goBack}
      hidden={hidden}
      signOut={signOut}
      showSignOut={showSignOut}
    />
  );
};

export default AppBar;
