import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  IconContainer,
  ContentContainer,
  ContentImage,
  Title,
  Description,
} from "./styles";

const OnboardingView = ({ slides, onDone }) => {
  const renderSlide = ({ item }) => {
    return (
      <ContentContainer>
        <Title isTitle={true}>{item.title}</Title>
        <ContentImage source={item.image} />
        <Description>{item.text}</Description>
      </ContentContainer>
    );
  };

  const renderNextButton = () => (
    <IconContainer>
      <Feather name="arrow-right-circle" size={30} color="rgba(0, 0, 0, .6)" />
    </IconContainer>
  );

  const renderSkipButton = () => (
    <IconContainer>
      <MaterialCommunityIcons
        name="close-circle-outline"
        size={30}
        color="rgba(200, 40, 50, 1.0)"
      />
    </IconContainer>
  );

  const renderDoneButton = () => (
    <IconContainer>
      <Feather name="check-circle" size={30} color="rgba(10, 100, 60, .7)" />
    </IconContainer>
  );

  return (
    <View style={{ backgroundColor: "#f7f4fc", flex: 1 }}>
      <AppIntroSlider
        renderItem={renderSlide}
        data={slides}
        onDone={onDone}
        onSkip={onDone}
        dotStyle={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
        activeDotStyle={{ backgroundColor: "#A233FF" }}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        renderSkipButton={renderSkipButton}
        showSkipButton={true}
      />
    </View>
  );
};

export default OnboardingView;
