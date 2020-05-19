import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import api from "../../services/api";
import AppBar from "../../components/app_bar";
import DashboardView from "./view";
import AboutButton from "../../components/about_button";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const response = await api.get("/api/infos");

      setData(response.data);
    }

    getData();
  }, []);

  return (
    <View style={{ backgroundColor: "#f7f4fc", flex: 1 }}>
      <AppBar showSignOut={null} hidden={true} />
      {data ? (
        <DashboardView data={data} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#A233FF" />
        </View>
      )}
      <AboutButton />
    </View>
  );
};

export default Dashboard;
