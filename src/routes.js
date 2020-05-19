import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Main from "./pages/main";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Onboarding from "./pages/onboarding";
import LoadingScreen from "./index";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="load"
      >
        <AppStack.Screen
          name="load"
          component={LoadingScreen}
        ></AppStack.Screen>

        <AppStack.Screen name="main" component={Main}></AppStack.Screen>

        <AppStack.Screen
          name="onboarding"
          component={Onboarding}
        ></AppStack.Screen>

        <AppStack.Screen
          name="dashboard"
          component={Dashboard}
        ></AppStack.Screen>
        <AppStack.Screen name="about" component={About}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
