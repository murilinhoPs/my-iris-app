import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getUser } from "./utils/utils";
import FontText from "./custom_fonts";

const LoadingScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    async function goToNextScreen() {
      console.log("verifyToken");

      const verifyToken = await getUser();
      console.log(verifyToken);

      navigation.navigate(verifyToken ? "dashboard" : "main");
    }

    goToNextScreen();
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#A233FF" />
    </View>
  );
};

export default LoadingScreen;
