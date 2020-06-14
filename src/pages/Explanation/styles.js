import styled from 'styled-components/native';

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

export const Logo = styled.Image`
  width:110px;
  height:40px;
  margin-left: 19px;
`;
export const Title = styled.Text`
  color:#FFFFFF;
  margin-top:10px;
  font-size:20px;
  font-weight:bold;
  margin-bottom:5px;
`;

export const MainContainer = styled.View`
  width:370px;
  background-color:#444444;
  margin-bottom:10px;
  align-items:center;
  padding:20px 0px 40px 0px;

  border-radius:10px;
`;

export const Character = styled.Image`
  position:absolute;
  left:-40px;
  top:5px;
  width:89px;
  height:89px;
  border-radius: 45px;
`;

export const MessageContainer = styled.View`
  width:255px;
  background-color:#ffffff;
  margin-bottom:10px;

  padding:9px 0px 0px 0px;
  align-items:center;
  justify-content:center;
  border-radius:10px;
`;

export const MessageText = styled.Text`
  color:#262222;
  margin-left:60px;
  margin-right:9px;
  font-size:14px;
  font-weight:bold;
`;

export const Line = styled.View`
  margin-top:10px;
  margin-bottom:62px;
  
  border-width:1px;
  width :100%;
  border-color:#707070;
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
