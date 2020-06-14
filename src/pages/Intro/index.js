import React from 'react';
import character from '../../assets/characterZoom.png';
import logo from '../../assets/logo.png';

import { Container, Logo, MainContainer, Character,TextLogo,ExplanationText,EnterButton,ButtonText } from './styles';

const Intro = ({navigation}) => {

  return (
    <Container>
      <MainContainer>
        <Character source={character}/>
        <Logo source={logo} />
        <ExplanationText>Oi parceiro, esse é o aplicativo do Chapa.</ExplanationText>
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
