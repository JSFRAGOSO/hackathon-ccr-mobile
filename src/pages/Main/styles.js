import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color:#333333;
  align-items:center;
  justify-content:center;
  
`;

export const HeaderContainer = styled.View`
  background-color:#333333;
  padding-top:30px;
`;

export const TextLogo = styled.Text`
  color:#C53737;
  font-size:27px;
  font-weight:bold;
  font-style: italic;
  border-radius: 77px;
  margin-left:23px;
  margin-bottom:10px;
`;

export const Title = styled.Text`
  color:#FFFFFF;
  margin-top:10px;
  font-size:20px;
  font-weight:bold;
  margin-bottom:5px;
`;

export const ChatContainer = styled.View`
  background-color:#D8D8D8;
  height:120px;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:100%;
`;

export const ChatInputContainer = styled.TouchableOpacity`
  background-color:#333333;
  border-radius:40px;
  flex-direction:row;
  align-items:center;
  height:64px;
  width:290px;
  margin-bottom:9px;
`;

export const Character = styled.Image`
  width:55px;
  height:55px;
  border-radius: 25px;
  margin-left:7px;

`;

export const TextLineContainer = styled.View`
  margin-left:9px;
  padding-bottom:5px;
  padding-right:30px;
  border-bottom-width:1px;
  border-bottom-color:#ffffff;
`;

export const AudioButton = styled.TouchableOpacity`
  background-color: #C21717;
  border-radius:40px;
  align-items:center;
  margin-left:5px;
  justify-content:center;
  height:50px;
  width:50px;
  margin-bottom:9px;
`;

export const InputMessageText = styled.Text`
  color:#ffffff;
  font-size:16px;
  font-style:italic;
`;

export const MainContainer = styled.View`
  background-color:#333333;
  padding:20px 10px 20px 10px;
`;

export const DoubleButtonContainer = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:center;
  margin-top:10px;
  
`;

export const ImageButtons = styled.TouchableOpacity`
  background: transparent;
  align-items:center;
`;

export const ButtonImage = styled.Image`
  width:200px;
  height: 220px;
`;

export const AbsoluteView = styled.View`
  position: absolute;
  width:150px;
  top:30px;
  left:30px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;


export const EmergencyButtonsContainer = styled.View`
  align-items:center;
  justify-content:space-between;
  width:200px;
  height: 220px;
`;
export const EmergencyButton = styled.TouchableOpacity`
  background-color:#ffffff;
  height:66px;
  width:130px;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border-radius:10px;
  padding: 5px 5px 10px 10px;  
`;

export const HelpLinkButton = styled.TouchableOpacity`
  background-color:transparent;
  height:66px;
  width:130px;
  align-items:center;
  justify-content:center;
  border-radius:10px;
  padding: 5px 5px 10px 5px;  
`;

export const LinkText = styled.Text`
  color:#ffffff;
  width:100px;
  font-size:16px;
  text-decoration: underline;
  margin-bottom:45px;
`;

export const MessageText = styled.Text`
  color:#262222;
  width:100px;
  font-size:16px;
  font-weight:bold;
  margin-left:5px;
`;

export const EnterButton = styled.TouchableOpacity`
  background-color:#444444;
  margin-top:10px;
  margin-left:70%;
  border-radius: 20px;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:80px;
  height:26px;
  padding:15px 5px 15px 5px;
`;

export const ButtonText = styled.Text`
  color:#FFFFFF;
  margin-right:10px;
  font-size:14px;
`;
