import { AsyncStorage } from "react-native";

export async function getUser() {
  return await AsyncStorage.getItem("@IrisLabApp:accessToken");
}

export async function storeUser(accessToken) {
  try {
    return await AsyncStorage.setItem(
      "@IrisLabApp:accessToken",
      JSON.stringify(accessToken)
    );
  } catch (e) {
    throw e;
  }
}

export async function deleteUser() {
  try {
    return await AsyncStorage.removeItem("@IrisLabApp:accessToken");
  } catch (e) {
    throw e;
  }
}
