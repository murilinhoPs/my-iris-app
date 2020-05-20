import style from "styled-components/native";
import FontText from "../../custom_fonts";

const Container = style.ScrollView`
    textAlign: center;
    paddingHorizontal: 20px;
    flex:1;
`;

const CatImage = style.Image`
    alignSelf: center;
`;

const ContentContainer = style.View`
    marginBottom: 10px;
    justifyContent: center;
    flexDirection: row-reverse;
    alignItems: center;
`;

const Title = style(FontText)`
    fontSize: 28px;
    fontWeight: 600;
    color: #131300;
    opacity: 0.8;
    marginTop: 15px;
`;

const Body = style(FontText)`
    fontSize: 16px;
    color: #737380;
    lineHeight: 24px;
    paddingTop: 20px;
`;

export { Title, Body, Container, ContentContainer, CatImage };
