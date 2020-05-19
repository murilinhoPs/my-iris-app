import style from "styled-components/native";

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

const TitleText = style.Text`
    fontSize: 30px;
    fontWeight: 700;
    color: #131300;
    opacity: 0.8;
    marginTop: 10px;
`;

const Description = style.Text`
    fontSize: 16px;
    color: #737380;
    lineHeight: 18px;
    paddingTop: 5px;
`;

export { Container, TitleContainer, TitleText, Description, ContentContainer };
