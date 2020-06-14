import React from 'react';
import character from '../../assets/characterZoom.png';
import { Container, MainContainer, Character,TextLogo,ExplanationText,EnterButton,ButtonText } from './styles';

const Intro = ({navigation}) => {

  return (
    <Container>
      <MainContainer>
        <Character source={character}/>
        <TextLogo>CHAPA</TextLogo>
        <ExplanationText>Oi parceiro, esse é o aplicativo </ExplanationText>
        <ButtonText>do Chapa.</ButtonText>
        <ExplanationText>Aqui você vai encontrar uma comunidade que me ajuda a ser seu copiloto na estrada</ExplanationText>
      </MainContainer>
      <EnterButton onPress={() => navigation.navigate('Explanation')}>
        <ButtonText>
          Entrar
        </ButtonText>
      </EnterButton>
    </Container>
  );
};

export default Intro;
