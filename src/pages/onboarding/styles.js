import style from "styled-components/native";

const IconContainer = style.View`
    alignSelf: center;
    justifyContent: center;
    padding: 10px;
    textAlign: center;
`;

const ContentContainer = style.View`
    alignItems:center;
    flex: 1;
    justifyContent: center;
    padding: 22px;
`;

const ContentImage = style.Image`
    height: 40%;
`;

const Title = style.Text`
    fontSize: 24px;
    fontWeight: bold;
    letterSpacing: 2px;
`;

const Description = style.Text`
    lineHeight: 23px;
    fontSize: 16px;
    textAlign: center;

`;

export { IconContainer, ContentContainer, ContentImage, Title, Description };
