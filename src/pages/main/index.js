import React from "react";
import { View, Text } from "react-native";
import AppBar from "../../components/app_bar";
import MainView from "./view";

const Main = () => {
  return (
    <View style={{ backgroundColor: "#f7f4fc", flex: 1 }}>
      <AppBar hidden={true} showSignOut={false} />
      <MainView />
    </View>
  );
};

export default Main;
