import style from "styled-components/native";
import { Divider } from "react-native-paper";

const Container = style.View`
    paddingHorizontal: 20px;
    marginTop: 10px;
`;

const MyDivider = style(Divider)`
    backgroundColor: #aa7fcc;
    height: 1.5px;
    opacity: 0.6;
    marginTop: 20px;
    width: 100%;
    alignSelf: center;
`;

const ProgressbarContainer = style.View`width: 50%; `;

const TasksContainer = style.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
`;

const TasksNameText = style.Text`
    fontSize: 22px;
    fontWeight: 800;
`;

const ListStyle = style.View` 
    marginTop: 15px;
`;

const ListItemStyle = style.View`        
    flexDirection: row;
    alignItems: center;
    justifyContent: space-around;
`;

const ListTextStyle = style.Text`
    color: #555555;
    fontSize: 13px;
`;

const CheckboxContainer = style.View` 
    width: 40px;
    height: 40px;
    scaleY: 1.4px;
    scaleX: 1.4px;
    alignItems: center;
    justifyContent: center;
`;

const GamesContainer = style.View` 
    marginTop: 20px;
    marginBottom: 8%;
    alignSelf: center;
    marginRight: 30px;
`;

const GamePadding = style.View`
    padding: 20px;
`;

const GameComponent = style.View`
    borderRadius: 15px;
    backgroundColor: #F8f8F8;
    marginBottom: 20px;
    elevation: 3;
`;

const GameImage = style.Image`
    width: 100%;
    height: 140px;
    borderRadius: 15px;
`;

const GameTextContainer = style.View`
    flexDirection: row;
    justifyContent: space-around;
    marginTop: 15px;
    marginBottom: 10px;
    paddingHorizontal: 10px;
`;

const GameText = style.Text`
    color: ${(props) => props.cor};
    fontSize: 14px;
    fontWeight: 600;
    marginBottom: 10px;
`;

const GameIconContainer = style.View`
    flexDirection: row;
    justifyContent: space-between;
    marginTop: 5px;
`;

const GameButton = style.TouchableOpacity`
    backgroundColor: #FF921D;
    height: 50px;
    justifyContent:center;
    borderRadius: 15px;
    borderColor: #F7F0F7;
    elevation: 1;
`;

const GameButtonText = style.Text`
    fontWeight: bold;
    alignSelf: center;
    color: #fff;
    fontSize: 18px;
`;

export {
  Container,
  MyDivider,
  ProgressbarContainer,
  TasksContainer,
  CheckboxContainer,
  ListStyle,
  ListItemStyle,
  GamesContainer,
  GameComponent,
  GameTextContainer,
  GameText,
  GameIconContainer,
  GameButton,
  GameButtonText,
  GameImage,
  GamePadding,
  TasksNameText,
  ListTextStyle,
};
