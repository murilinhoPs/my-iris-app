import React from "react";
import { Title, Body, Container } from "./styles";
import SignIn from "../../components/signIn";

const MainView = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Title>Bem vindo!</Title>
      <Body>
        Esta é uma plataforma criada pela ÍrisLab para ajudar seus filhos a
        entender a tecologia.
      </Body>
      <SignIn />
    </Container>
  );
};

export default MainView;
