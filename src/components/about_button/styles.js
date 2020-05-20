import style from "styled-components/native";
import FontText from "../../custom_fonts";

const ButtonContent = style.View`
    flexDirection: row;
    justifyContent: space-around
    alignItems: center;
    width: 120px;
    paddingVertical: 7px;
`;

const MyText = style(FontText)`
    color: #fff
    fontSize: 17px;
`;

const MyFloatingButton = style.TouchableOpacity`
    position: absolute;
    margin: 16px;
    right: -5px;
    bottom: -2px;
    backgroundColor: #A233FF;
    borderRadius: 30px;

`;

export { ButtonContent, MyFloatingButton, MyText };
