import React from "react";
import { View } from "react-native";
import AppBar from "../../components/app_bar";
import AboutView from "./view";

const About = () => {
  return (
    <View>
      <AppBar />
      <AboutView />
    </View>
  );
};

export default About;
