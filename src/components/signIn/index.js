import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { storeUser } from "../../utils/utils";

import SignInView from "./view";

const SignIn = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (name) => {
    setName(name);
    setError("");
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    setError("");
  };

  async function handleSignInPress() {
    if (name.length === 0 || password.length === 0) {
      setError("Preencha usuário e senha para continuar!");
      return;
    }

    try {
      let credentials = {
        name: name,
        password: password,
      };

      setLoading(true);

      const response = await api.post("users/login", credentials);
      console.log(response.data);

      await storeUser(response.data.accessToken);

      navigation.reset({
        index: 0,
        routes: [{ name: "dashboard" }],
      });
    } catch (e) {
      console.log(e);

      setLoading(false);

      setError("Houve um problema com o login, verifique suas credenciais!");
    }
  }

  return (
    <SignInView
      error={error}
      name={name}
      password={password}
      handleNameChange={handleNameChange}
      handlePasswordChange={handlePasswordChange}
      handleSignInPress={handleSignInPress}
      loading={loading}
    />
  );
};

export default SignIn;
