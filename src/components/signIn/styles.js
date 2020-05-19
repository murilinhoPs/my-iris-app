import style from "styled-components/native";

const Container = style.View`
  alignItems: center;
  justifyContent: flex-end;
  marginTop: 30px;
  flex: 1;
`;

const Input = style.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 10px;
  borderRadius: 5px;
  backgroundColor: #fff;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = style.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = style.TouchableOpacity`
  padding: 10px;
  borderRadius: 5px;
  backgroundColor: #A233EE;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = style.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export { Container, Input, ErrorMessage, Button, ButtonText };
