import React from "react";
import { View, Text, FlatList } from "react-native";

// import { Container } from './styles';

const DashboardView = ({ data }) => {
  const renderListData = ({ item }) => <Text>{item.task}</Text>;

  console.log(data[0].name);
  console.log(data[0].email);

  console.log(data[0].tasks);

  return (
    <View>
      <Text>{data[0].name}</Text>
      <FlatList
        data={data[0].tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderListData}
      />
    </View>
  );
};

export default DashboardView;
