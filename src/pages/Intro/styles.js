import styled from 'styled-components/native';


export const Container = styled.View`
  flex:1;
  background-color:#333333;
  align-items:center;
  justify-content:center;
  
`;

export const MainContainer = styled.View`
  width:276px;
  height:403px;
  background-color:#444444;
  margin-bottom:60px;
  align-items:center;
  justify-content:center;
  border-radius:10px;
`;

export const Character = styled.Image`
  width:148px;
  height:148px;
  border-radius: 77px;
`;

export const TextLogo = styled.Text`
  color:#C53737;
  font-size:27px;
  font-weight:bold;
  font-style: italic;
  border-radius: 77px;
`;

export const Logo = styled.Image`
  width:110px;
  height:40px;
  margin-top: 10px;
`;

export const ExplanationText = styled.Text`
  color:#FFFFFF;
  font-size:14px;
  margin-top:15px;
  width:200px;
`;

export const EnterButton = styled.TouchableOpacity`
  background-color:#444444;
  margin-top:10px;
  border-radius: 20px;
  align-items:center;
  justify-content:center;
  width:77px;
  height:26px;
  padding:15px 0 15px 0;
`;

export const ButtonText = styled.Text`
  color:#FFFFFF;
  
  font-size:14px;
`;


