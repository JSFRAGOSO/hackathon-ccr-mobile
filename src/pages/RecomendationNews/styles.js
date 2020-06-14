import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background-color:#333333;
  flex-direction:row;
  padding-top:30px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding-top:30px;
  padding-bottom:10px;
  background-color:#333333;
  border-top-width:1px;
  border-top-color:#C2C2C2;
`;

export const HeaderTitle = styled.Text`
  font-weight:bold;
  color:#fff;
  font-size:21px;
  margin-left:10px;
  margin-top:30px;
`
export const Character = styled.Image`
  width:55px;
  height:55px;
  border-radius: 25px;
  margin-left:7px;

`;

export const Information = styled.Text`
  color:#FFFFFF;
  width:300px;
  margin-left:10px;
  font-size:14px;
`;

export const Message = styled.View`
  width: 320px;
  margin-top: 10px ;
  margin-bottom: 10px ;
  background-color: #444444;
  padding: 20px;
  text-align: center;
  border-radius:10px;
  margin-left:12%;
`

export const MessageText = styled.Text`
  color:#999999;
  font-size:18px;
  
`;

export const MessageTitle = styled.Text`
  font-weight:bold;
  color:#ffffff;
  font-size:18px;
  margin-bottom:15px;
`;

export const MessageLink = styled.Text`
  font-weight:bold;
  margin-top:15px;
  margin-bottom:15px;
  font-size:18px;
  color:#fff;
  text-decoration:underline;
`;
