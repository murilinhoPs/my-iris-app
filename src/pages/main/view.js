import React from "react";
import { View } from "react-native";
import { Title, Body, Container, ContentContainer, CatImage } from "./styles";
import SignIn from "../../components/signIn";

const MainView = () => {
  return (
    <View style={{ flex: 1 }}>
      <ContentContainer>
        <Title isTitle={true}>Olá! Bem vindo!</Title>

        <CatImage source={require("../../assets/catLogo.png")} />
      </ContentContainer>
      <Container showsVerticalScrollIndicator={false}>
        <Body>
          Esta é uma plataforma criada pela ÍrisLab para ajudar seus filhos a
          entender a tecologia.
        </Body>

        <SignIn />
      </Container>
    </View>
  );
};

export default MainView;
