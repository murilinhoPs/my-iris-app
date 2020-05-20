import style from "styled-components/native";
import FontText from "../../custom_fonts";

const Container = style.View`
    alignItems: center;
    textAlign: center;
    paddingHorizontal: 25px;
    marginBottom: 10px;
`;

const ContentContainer = style.View`
    width: 100%
`;

const TitleContainer = style.View`
    flexDirection: row;
    justifyContent: space-between;
    paddingTop: 10px;
`;

const TitleText = style(FontText)`
    fontSize: 30px;
    fontWeight: 600;
    color: #131300;
    opacity: 0.8;
    marginTop: 10px;
`;

const Description = style(FontText)`
    fontSize: 14px;
    color: #737380;
    lineHeight: 16px;
    paddingTop: 5px;
`;

export { Container, TitleContainer, TitleText, Description, ContentContainer };
