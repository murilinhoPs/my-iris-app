import React from "react";

import { useFonts } from "@use-expo/font";
import { Text, View } from "react-native";
import { AppLoading } from "expo";

const FontText = (props) => {
  let [fontsLoaded] = useFonts({
    CHICKEN_Pie: require("./assets/fonts/CHICKEN_Pie.otf"),
    "Mitr-Regular": require("./assets/fonts/Mitr-Regular.ttf"),
    "Mitr-Bold": require("./assets/fonts/Mitr-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return props.isTitle ? (
      <Text
        style={[{ fontFamily: "CHICKEN_Pie", letterSpacing: 1 }, props.style]}
      >
        {props.children}
      </Text>
    ) : (
      <Text
        style={[{ fontFamily: "Mitr-Regular", letterSpacing: 1 }, props.style]}
      >
        {props.children}
      </Text>
    );
  }
};

export default FontText;
