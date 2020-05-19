import React from "react";
import { View, StatusBar } from "react-native";

const StatusBarPadding = () => {
  return <View style={{ paddingTop: StatusBar.currentHeight + 10 }} />;
};

export default StatusBarPadding;
