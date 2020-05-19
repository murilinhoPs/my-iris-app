import React from "react";
import { useNavigation } from "@react-navigation/native";

import OnboardingView from "./view";

const slides = [
  {
    key: 1,
    title: "O que é?",
    text:
      "Um lugar para seu filho aprender sobre tecnologia e você acompanhar ele!",
    image: require("../../assets/aprendaCom.jpg"),
    backgroundColor: "#f7f4fc",
  },
  {
    key: 2,
    title: "Aprender com jogos",
    text: "Seu filho vai se familiarizar com a tecnologia através de jogos!",
    image: require("../../assets/jogos.jpg"),
    backgroundColor: "#f7f4fc",
  },
  {
    key: 3,
    title: "Obrigado! Está tudo pronto",
    text: "Aproveite o app e se divirta com seu filho!",
    image: require("../../assets/obrigado.jpg"),
    backgroundColor: "#f7f4fc",
  },
];

const Onboarding = () => {
  const navigation = useNavigation();

  const onDone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "dashboard" }],
    });
  };

  return <OnboardingView slides={slides} onDone={onDone} />;
};

export default Onboarding;
