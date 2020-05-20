import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { MyFloatingButton, ButtonContent, MyText } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AboutButton = () => {
  const navigation = useNavigation();

  return (
    <MyFloatingButton
      activeOpacity={0.7}
      onPress={() => navigation.navigate("about")}
    >
      <ButtonContent>
        <MaterialCommunityIcons
          name="information-outline"
          size={30}
          color="#fff"
        />
        <MyText isTitle={true}>Sobre</MyText>
      </ButtonContent>
    </MyFloatingButton>
  );
};

export default AboutButton;
