import React from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Logo } from "./styles";
import logo from "../../assets/Logo.png";

const AppBarView = ({ goBack, hidden, signOut, showSignOut }) => {
  return (
    <Container size={StatusBar.currentHeight + 2}>
      <Logo source={logo}></Logo>
      {hidden ?? (
        <TouchableOpacity onPress={goBack}>
          <Feather name="arrow-left" size={35} color="#A233FF" />
        </TouchableOpacity>
      )}
      {showSignOut ?? (
        <TouchableOpacity onPress={signOut}>
          <MaterialCommunityIcons
            style={{ scaleX: -1 }}
            name="logout"
            size={35}
            color="#A233FF"
          />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default AppBarView;
