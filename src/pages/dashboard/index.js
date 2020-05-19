import React, { useState, useEffect } from "react";
import { View } from "react-native";

import api from "../../services/api";
import AppBar from "../../components/app_bar";
import DashboardView from "./view";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const response = await api.get("/api/infos");

      // console.log(response.data);

      setData(response.data);
    }

    getData();
  }, []);

  return (
    <View>
      <AppBar showSignOut={null} hidden={true} />
      {data ? <DashboardView data={data} /> : <View />}
    </View>
  );
};

export default Dashboard;
