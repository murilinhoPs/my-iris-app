import React from "react";
import { Title, Body, Container, ContentContainer, CatImage } from "./styles";
import SignIn from "../../components/signIn";

const MainView = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <ContentContainer>
        <Title>Olá! Bem vindo!</Title>

        <CatImage source={require("../../assets/catLogo.png")} />
      </ContentContainer>

      <Body>
        Esta é uma plataforma criada pela ÍrisLab para ajudar seus filhos a
        entender a tecologia.
      </Body>

      <SignIn />
    </Container>
  );
};

export default MainView;
