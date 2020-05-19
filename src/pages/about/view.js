import React from "react";
import { ScrollView } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import {
  Container,
  TitleContainer,
  TitleText,
  Description,
  ContentContainer,
} from "./styles";

const AboutView = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <ContentContainer>
          <TitleContainer>
            <TitleText>Sobre: </TitleText>
            <MaterialCommunityIcons
              name="information-outline"
              size={35}
              color="#131300"
              style={{ paddingTop: 13, opacity: 0.8 }}
            />
          </TitleContainer>
          <Description>
            A Íris lab é uma startup fundada a 6 meses que está hospedada no
            Google Campus, e como startup queremos levar a tecnologia para
            crianças.
          </Description>
        </ContentContainer>

        <ContentContainer>
          <TitleContainer>
            <TitleText>Objetivos: </TitleText>
            <Feather
              name="crosshair"
              size={35}
              color="#131300"
              style={{ paddingTop: 13, opacity: 0.8 }}
            />
          </TitleContainer>
          <Description>
            - Levar tecnologia para crianças ferramenta.
          </Description>
          <Description>- Ensinar como utilizar essa ferramenta</Description>
          <Description>- Como utilizar a tecnologia para ensinar</Description>
          <Description>- Ensinar e aprender de forma lúdica</Description>
        </ContentContainer>

        <ContentContainer>
          <TitleContainer>
            <TitleText>Contato: </TitleText>
            <MaterialCommunityIcons
              name="contact-mail-outline"
              size={35}
              color="#131300"
              style={{ paddingTop: 13, opacity: 0.8 }}
            />
          </TitleContainer>
          <Description>- telefone: (99) 99999-9999</Description>
          <Description>- e-mail: irislab@contato.com.br</Description>
          <Description>- Hospedada no Google Campus</Description>
        </ContentContainer>
      </Container>
    </ScrollView>
  );
};

export default AboutView;
