import style from "styled-components/native";
import FontText from "../../custom_fonts";

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

const Title = style(FontText)`
    fontSize: 32px;
    fontWeight: 600;
    letterSpacing: 2px;
    textAlign: center;
    color: rgba(0,0,0, 0.85)

`;

const Description = style(FontText)`
    lineHeight: 23px;
    fontSize: 16px;
    textAlign: center;
    color: rgba(0,0,0, 0.7)

`;

export { IconContainer, ContentContainer, ContentImage, Title, Description };
