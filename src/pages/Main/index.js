import React,{useState} from 'react';
import { Fontisto, Octicons, FontAwesome5 } from '@expo/vector-icons'; 

import character from '../../assets/characterZoom.png';
import armButton from '../../assets/armButton.png';
import truckButton from '../../assets/truckButton.png';
import insideTruckButton from '../../assets/insideTruckButton.png';
import logo from '../../assets/logo.png';

import {
  Logo,
  ChatContainer,
  Character,
  ChatInputContainer,
  TextLineContainer,
  AudioButton,
  MainContainer,
  DoubleButtonContainer,
  ImageButtons,
  ButtonImage,
  AbsoluteView,
  ButtonText,
  EmergencyButtonsContainer,
  EmergencyButton,
  HelpLinkButton,
  LinkText,
  MessageText,
  HeaderContainer,
  InputMessageText,
  CloseModalButton,
  CloseModalButtonText,
  ModalView,
  ModalViewText,
  ModalViewTitle,
  Modal,
 } from './styles';

const Main = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Logo source={logo}/>
      </HeaderContainer>
      <ChatContainer>
      <ChatInputContainer onPress={() => navigation.navigate('Recomendations')}>
        <Character source={character}/>
        <TextLineContainer>
          <InputMessageText>Pergunte ao Chapa</InputMessageText>
        </TextLineContainer>
      </ChatInputContainer>
      <AudioButton onPress={() => navigation.navigate('Recomendations')}>
        <Fontisto name="mic" size={24} color="white" />
      </AudioButton>
      </ChatContainer>

      <MainContainer>
        <DoubleButtonContainer>
          <ImageButtons onPress={() => navigation.navigate('Reminders')}>
            <ButtonImage source={armButton}/>
              <AbsoluteView>
                <ButtonText>Parceiro, você preza pela sua saúde?</ButtonText>
              </AbsoluteView>
          </ImageButtons>
          <ImageButtons onPress={() => navigation.navigate('RecomendationNews')}>
            <ButtonImage source={truckButton}/>
              <AbsoluteView>
                <ButtonText>Recomendações para comer, dormir, abastecer dos irmãos de estrada</ButtonText>
              </AbsoluteView>
          </ImageButtons>
        </DoubleButtonContainer>
        <Modal
           animationType="slide"
           transparent={true}
           visible={modalVisible}
        >
          <ModalView>
            <ModalViewTitle>O que faz esse botão?</ModalViewTitle>
            <ModalViewText>Liga para a central de emergência da Rodovia</ModalViewText>
            <CloseModalButton onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <CloseModalButtonText>OK</CloseModalButtonText>
            </CloseModalButton>
          </ModalView>

        </Modal>
        <DoubleButtonContainer>
          <ImageButtons onPress={() => navigation.navigate('RecomendationWebView')}>
            <ButtonImage source={insideTruckButton}/>
              <AbsoluteView>
                <ButtonText>Faça as suas recomendações para colegas de estrada</ButtonText>
              </AbsoluteView>
          </ImageButtons>
          <EmergencyButtonsContainer>
            <EmergencyButton>
              <Octicons name="alert" size={24} color="#F9930D" />
              <MessageText>Emergência Mecânica</MessageText>
            </EmergencyButton>
            <EmergencyButton>
              <FontAwesome5 name="ambulance" size={20} color="#C53737" />
              <MessageText>Emergência de Saúde</MessageText>
            </EmergencyButton>
            <HelpLinkButton  onPress={() => {
                setModalVisible(true);
             }}>
              <LinkText>O que é isso?</LinkText>
            </HelpLinkButton>
          </EmergencyButtonsContainer>
        </DoubleButtonContainer>
      </MainContainer>
    </>
  );
};

export default Main;
