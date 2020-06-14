import styled, { css } from 'styled-components/native';

export const HeaderContainer = styled.View`
  background-color:#333333;
  flex-direction:row;
  align-items:center;
  padding-top:30px;
`;

export const Character = styled.Image`
  width:55px;
  height:55px;
  border-radius: 25px;
  margin-left:7px;

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


export const Container = styled.View`
  flex: 1;
  justify-content:space-between;
  padding-top:30px;
  padding-bottom:10px;
  background-color: #333333;
`;


export const GoBackButton = styled.TouchableOpacity`
  flex-direction:row;
  margin-bottom:5px;
  margin-left:10px;
  height:50px;
  width:100px;
  border-radius:14px;
  justify-content:center;
  align-items:center;
  background-color:transparent;
`;

export const GoBackText = styled.Text`
  font-weight:bold;
  color:#fff;
  font-size:21px;
`;

export const MessageContainter = styled.ScrollView`
  flex:1;
  background-color: #444444;
`

export const Message = styled.View`
  width: 320px;
  margin-top: 10px ;
  margin-bottom: 10px ;
  background-color: #fff;
  padding: 20px;
  text-align: center;
  border-radius:10px;
  margin-left:30px;
  ${props =>
    props.sent &&
    css`
      background-color: #34B7F1;
      margin-left:50px;
    `}
`

export const MessageText = styled.Text`
  font-weight:bold;
  font-size:18px;
`;

export const MessageLink = styled.Text`
  font-weight:bold;
  font-size:18px;
  color:#0000EE;
  text-decoration:underline;
`;

export const SearchForm = styled.KeyboardAvoidingView`
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding: 15px 10px 0 10px;
  background-color: #333333;
`;

export const SearchInput = styled.TextInput`
  flex:1;
  height:60px;
  background-color:#fff;
  border-radius:25px;
  margin-bottom:20px;
  padding: 0 20px 0 20px;
  font-size:24px;
`;

export const SendButton = styled.TouchableOpacity`
  width:50px;
  height:50px;
  align-items:center;
  justify-content:center;
  border-radius:25px;
  background-color:#C53737;
  margin-left:15px;
  margin-bottom:20px;
`;

export const ArrowRightDownBlue = styled.View`
  position:absolute;
  right:-20px;
  bottom:0px;
  width: 0; 
  height: 0; 
  border-left-width: 20px;
  border-right-width: 20px;
  border-top-width: 20px;
  border-bottom-width: 20px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: #34B7F1;
`;

export const ArrowLeftUpWhite = styled.View`
  position:absolute;
  left:-18px;
  top:0px;
  width: 0; 
  height: 0; 
  border-left-width: 20px;
  border-right-width: 20px;
  border-top-width: 20px;
  border-bottom-width: 20px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #fff;
  border-bottom-color: transparent;
`;
