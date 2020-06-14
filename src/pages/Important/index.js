import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import character from '../../assets/characterZoom.png';
import {
  Container,
  MainContainer,
  Character,
  MessageContainer,
  MessageText,
  TextLogo,
  EnterButton,
  ButtonText,
  HeaderContainer,
  Title,
 } from './styles';

const Important = ({navigation}) => {

  return (
    <>
      <HeaderContainer>
        <TextLogo>CHAPA</TextLogo>
      </HeaderContainer>
      <Container>
        <Title>Importante!</Title>
        <MainContainer>
          <MessageContainer>
          <Character source={character}/>
            <MessageText>
              Se você é um cabra que preza sua vida, você também pode ativar as minhas dicas de saúde. Foram profissionais de saúde que me explicaram tudo direitinho.
            </MessageText>
            
          </MessageContainer>
          <MessageContainer>
            <MessageText>
              No futuro, você poderá personalizar, se vc tem alguma das doenças que eu entendo. Como diabete, pressão alta, colesterol alto.
            </MessageText>
            
          </MessageContainer>
          <MessageContainer short>
            <MessageText>
              Copiou?
            </MessageText>
          </MessageContainer>
          
        </MainContainer>
          <EnterButton onPress={() => navigation.navigate('Main')}>
            <ButtonText>
              Próximo
            </ButtonText>
            <Ionicons name="ios-arrow-forward" size={24} color="white" />
          </EnterButton>
      </Container>
    </>
  );
};

export default Important;
