import styled from 'styled-components/native';


export const TextLogo = styled.Text`
  color:#C53737;
  font-size:27px;
  font-weight:bold;
  font-style: italic;
  border-radius: 77px;
  margin-left:23px;
  margin-bottom:10px;
`;

export const Logo = styled.Image`
  width:110px;
  height:40px;
  margin-left: 19px;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content:space-between;
  padding-top:30px;
  padding-bottom:10px;
  background-color:#333333;
`;

export const HeaderTitle = styled.Text`
  font-weight:bold;
  color:#fff;
  font-size:21px;
  margin-bottom:20px;
  margin-left:10px;
`

export const MessageContainter = styled.ScrollView`
  flex:1;
  background-color: #333333;
`

export const Message = styled.View`
  flex-direction:row;
  width: 320px;
  margin-top: 10px ;
  margin-bottom: 10px ;
  background-color: #fff;
  padding: 20px;
  text-align: center;
  border-radius:10px;
  margin-left:30px;
`
export const ArrowLeftUpWhite = styled.View`
  position:absolute;
  left:-20px;
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

export const Thumbnail = styled.Image`
  width:80px;
  height:60px;
  border-radius:4px;
  border-width:4px;
`
export const Info = styled.View`
  margin-left:20px;
`
export const Title = styled.Text`
  font-weight:bold;
  font-size:18px;
`
export const Hours = styled.Text`
  margin-top:5px;
  color: #666;
`
