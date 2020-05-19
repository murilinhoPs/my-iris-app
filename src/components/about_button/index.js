import React from "react";
import { MyFloatingButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AboutButton = () => {
  const navigation = useNavigation();

  return (
    <MyFloatingButton
      label="Sobre"
      small
      icon="information-outline"
      onPress={() => navigation.navigate("about")}
    ></MyFloatingButton>
  );
};

export default AboutButton;
