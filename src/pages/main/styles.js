import style from "styled-components/native";

const Container = style.ScrollView`
    textAlign: center;
    paddingHorizontal: 20px;
    flex:1;
`;

const CatImage = style.Image`
    alignSelf: center;
`;

const ContentContainer = style.View`
    justifyContent: center;
    flexDirection: row-reverse;
    alignItems: center;
    width: 100%;
`;

const Title = style.Text`
    fontSize: 30px;
    fontWeight: 700;
    color: #131300;
    opacity: 0.8;
    marginTop: 15px;
`;

const Body = style.Text`
    fontSize: 18px;
    color: #737380;
    lineHeight: 26px;
    paddingTop: 20px;
`;

export { Title, Body, Container, ContentContainer, CatImage };
