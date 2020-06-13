import React, { useState } from 'react';
import { Keyboard, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import api from '../../services/api';
import { Container,
         MessageContainter,
         Message,
         MessageText,
         MessageLink,
         SearchForm,
         SearchInput,
         SendButton,
         ArrowRightDownBlue,
         ArrowLeftUpWhite,
         GoBackButton,
         GoBackText,
        } from './styles';

const Recomendations = ({navigation}) => {
  const [search, setSearch] = useState('')
  const [messages, setMessages] = useState([])


  async function handleSendMessage(){
    const response = await api.get(`/recomendations/search?phrase=${search}`)
    setMessages([...messages, {id: Date.now(), text:search} ,response.data, ])
    Keyboard.dismiss()
    setSearch('');
  }

  return (
    <Container>
      <GoBackButton onPress={() => navigation.goBack()} >
        <AntDesign name="back" size={24} color="black" />
        <GoBackText>Voltar</GoBackText>
      </GoBackButton>
      <MessageContainter 
         ref={ref => {this.scrollView = ref}}
         onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
      >
        <Message>
          <ArrowLeftUpWhite/>
          <MessageText>
          Olá, eu sou o Chapa, como eu posso te ajudar hoje?
          </MessageText>
        </Message>
        {
          messages.map(message => {
            // Se é uma mensagem do backend
            if (message.name) {
              return (
                <Message key={message.transactionId} received>
                  <MessageText>
                    Encontrei o seguinte local: {message.name}
                  </MessageText>
                  <MessageText>
                    Localizado em: {message.address}
                  </MessageText>
                  <MessageLink onPress={() => Linking.openURL(message.link? message.link: '')}>
                    Ver mais sobre {message.name}
                  </MessageLink>
                  <MessageText>
                    {message.observation}
                  </MessageText>
                  
                <ArrowLeftUpWhite/>
                </Message>
              )
            } else {
            return (
              <Message key={message.id} sent>
                <MessageText>
                  {message.text}
                </MessageText>
                <ArrowRightDownBlue/>
              </Message>
            )
            }
          })
        }
      </MessageContainter>
      <SearchForm>
        <SearchInput
          placeholder="O que você procura?"
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false}
          value={search}
          onChangeText={setSearch}
        />
        <SendButton onPress={handleSendMessage}>
          <MaterialIcons name="send" size={24} color="white"/>
        </SendButton>
      </SearchForm>
    </Container>
  );
};

export default Recomendations;
