import React from "react";
import { View } from "react-native";
import AppBar from "../../components/app_bar";
import AboutView from "./view";

const About = () => {
  return (
    <View style={{ backgroundColor: "#f7f4fc", flex: 1 }}>
      <AppBar showSignOut={false} />
      <AboutView />
    </View>
  );
};

export default About;
