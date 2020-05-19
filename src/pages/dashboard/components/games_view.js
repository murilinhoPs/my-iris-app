import React from "react";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  GamesContainer,
  GameComponent,
  GameText,
  GameIconContainer,
  GameButton,
  GameButtonText,
  GameImage,
  GameTextContainer,
  GamePadding,
} from "../styles";

const GameView = ({ image, points, name }) => {
  return (
    <GamesContainer>
      <GameComponent>
        <GamePadding>
          <GameImage source={image} />

          <GameTextContainer>
            <GameText cor="#000">{name} </GameText>
            <GameText cor="#000"> </GameText>
            <GameText cor="#f87f"> {points}</GameText>
          </GameTextContainer>

          <GameIconContainer>
            <AntDesign name="star" size={30} color="#F4D81F" />
            <AntDesign name="staro" size={30} color="#737380" />
            <AntDesign name="staro" size={30} color="#737380" />
          </GameIconContainer>
        </GamePadding>

        <GameButton>
          <GameButtonText>JOGAR!</GameButtonText>
        </GameButton>
      </GameComponent>
    </GamesContainer>
  );
};

export default GameView;
