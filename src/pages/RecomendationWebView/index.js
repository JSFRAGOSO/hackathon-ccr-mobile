import React from 'react';
import { WebView } from 'react-native-webview';
import { FontAwesome } from '@expo/vector-icons'; 
import {
  Container,
  GoBackButton,
  GoBackText,
 } from '../Recomendations/styles';

export default function RecomendationWebView({navigation}) {
  return (
    <Container>
      <GoBackButton onPress={() => navigation.goBack()} >
        <FontAwesome name="chevron-left" size={24} color="white" />
        <GoBackText>Voltar</GoBackText>
      </GoBackButton>
      <WebView source={{ uri: 'https://hackathon-ccr-frontend.herokuapp.com/recomendations' }} style={{ flex: 1 }} />
    </Container>
  );
}
