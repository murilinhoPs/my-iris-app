import styles from "styled-components/native";

const Container = styles.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    paddingTop: ${(props) => props.size};
    paddingHorizontal: 10px;
    backgroundColor: #FFFFFF;
    elevation: 7;
    paddingBottom: 8px;
`;

const Logo = styles.Image`
  height: 45px;
  width: 45px;
`;

export { Container, Logo };
