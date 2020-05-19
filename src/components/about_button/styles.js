import style from "styled-components/native";
import { FAB } from "react-native-paper";

const Container = style.View`
    paddingHorizontal: 20px;
    marginTop: 10px;
`;

const MyFloatingButton = style(FAB)`
    position: absolute;
    margin: 16px;
    right: -7px;
    bottom: -5px;
`;

export { Container, MyFloatingButton };
