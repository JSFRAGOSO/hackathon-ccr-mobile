import React, { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons'; 
import character from '../../assets/characterZoom.png';
import api from '../../services/api';
import {GoBackButton, GoBackText, HeaderContainer, Character,} from '../Recomendations/styles';

import {
         Container,
         HeaderTitle,
         Information,
         Message,
         MessageText,
         MessageLink,
         MessageTitle,
       } from './styles';

const RecomendationNews = ({navigation}) => {

  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    async function loadrecomendations() {
      const response = await api.get('/recomendations');
      setRecomendations(response.data);
    }
    loadrecomendations();
  }, []);

  return (
    <>
      <HeaderContainer>
        <GoBackButton onPress={() => navigation.goBack()} >
          <AntDesign name="back" size={24} color="white" />
          <GoBackText>Voltar</GoBackText>
        </GoBackButton>
          <HeaderTitle>Recomendações</HeaderTitle>
      </HeaderContainer>
      <Container>
          <HeaderContainer>
            <Character source={character}/>
            <Information>Aperta na recomendação que tu quer e saiba mais sobre o local</Information>
          </HeaderContainer>

          {
            recomendations.map(message => {
                return (
                  <Message key={message.transactionId} received>
                    <MessageTitle>
                      {message.name}
                    </MessageTitle>
                    <MessageText>
                      Localizado em: {message.address}
                    </MessageText>
                    <MessageLink onPress={() => Linking.openURL(message.link? message.link: '')}>
                      Ver mais sobre {message.name}
                    </MessageLink>
                    <MessageText>
                      {message.observation}
                    </MessageText>
                    
                  </Message>)
                  })

          }
      </Container>
    </>
  );
};

export default RecomendationNews;
