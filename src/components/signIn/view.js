import React from "react";

import { Container, Input, ErrorMessage, Button, ButtonText } from "./styles";

const SignInView = ({
  error,
  name,
  password,
  handleNameChange,
  handlePasswordChange,
  handleSignInPress,
}) => {
  return (
    <Container>
      {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        placeholder="Nome registrado"
        value={name}
        onChangeText={handleNameChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={handlePasswordChange}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Button onPress={handleSignInPress}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
};

export default SignInView;
