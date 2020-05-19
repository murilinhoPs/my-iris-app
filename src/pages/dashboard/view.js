import React from "react";
import { Text, FlatList, ScrollView, View } from "react-native";
import { ProgressBar, Checkbox } from "react-native-paper";

import {
  Container,
  MyDivider,
  ProgressbarContainer,
  TasksContainer,
  CheckboxContainer,
  ListStyle,
  ListItemStyle,
  ListTextStyle,
  TasksNameText,
} from "./styles";

import GameView from "./components/games_view";

const DashboardView = ({ data }) => {
  let completedTasks = data[0].tasks.filter(
    (value) => value.completed === true
  );

  const completedNumber = completedTasks.length / data[0].tasks.length;

  const renderListData = ({ item }) => (
    <ListItemStyle>
      <ListTextStyle lineDecoration={item.completed ? "line-through" : "none"}>
        {item.task}
      </ListTextStyle>
      <CheckboxContainer>
        <Checkbox
          disabled={false}
          uncheckedColor="#c9c9cf"
          color="#ceb6e2"
          status={item.completed ? "checked" : "unchecked"}
        />
      </CheckboxContainer>
    </ListItemStyle>
  );

  return (
    <Container>
      <TasksContainer>
        <TasksNameText>{data[0].name}</TasksNameText>

        <ProgressbarContainer>
          <Text>Tarefas completas: {completedNumber.toFixed(1) * 100}%</Text>
          <ProgressBar
            progress={completedTasks.length / data[0].tasks.length}
            style={{ borderRadius: 15 }}
          />
        </ProgressbarContainer>
      </TasksContainer>

      <ListStyle>
        <FlatList
          data={data[0].tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderListData}
          showsVerticalScrollIndicator={false}
        />
      </ListStyle>

      <MyDivider />

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        centerContent={true}
      >
        <GameView
          image={require("../../assets/pokemons_is_everywhere800.jpg")}
          name="Pesca Pokémon"
          points="1200 Pontos"
        />
        <GameView
          image={require("../../assets/pokeWatch.png")}
          name="Hora Pokémon"
          points="100 Pontos"
        />
        <GameView
          image={require("../../assets/superCat.jpg")}
          name="Super Cat"
          points="1000 Pontos"
        />
        <GameView
          image={require("../../assets/Coco2.jpg")}
          name="Catch Poopy  "
          points="780 Pontos"
        />
        <GameView
          image={require("../../assets/kittyOnboarding.png")}
          name="Organize Games"
          points="500 Pontos"
        />
      </ScrollView>
    </Container>
  );
};

export default DashboardView;
