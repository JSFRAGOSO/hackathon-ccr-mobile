import React from 'react';
import { WebView } from 'react-native-webview';
import { AntDesign } from '@expo/vector-icons'; 
import {
  Container,
  GoBackButton,
  GoBackText,
 } from '../Recomendations/styles';

export default function RecomendationWebView({navigation}) {
  return (
    <Container>
      <GoBackButton onPress={() => navigation.goBack()} >
        <AntDesign name="back" size={24} color="black" />
        <GoBackText>Voltar</GoBackText>
      </GoBackButton>
      <WebView source={{ uri: 'https://hackathon-ccr-frontend.herokuapp.com/recomendations' }} style={{ flex: 1 }} />
    </Container>
  );
}
