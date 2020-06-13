import React,{useEffect,useState} from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import api from '../../services/api';

import { 
        Container,
        MessageContainter,
        ArrowLeftUpWhite,
        Message,
        Thumbnail,
        Info,
        Title,
        Hours,
        HeaderTitle,
        Footer,
        ChatButton, 
        } from './styles';

const Reminders = ({navigation}) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    async function loadReminders() {
      const response = await api.get('/reminders');
      setReminders(response.data);
    }
    loadReminders();
  }, []);

  return (
    <Container>
      <HeaderTitle>Seus lembretes do dia</HeaderTitle>
      <MessageContainter>
        {reminders.map(reminder => (
          
          <Message key={reminder._id}>
            <Thumbnail source={{uri: reminder.thumbnail_url}}/>
            <Info>
              <Title>{reminder.title}</Title>
              <Hours>{reminder.hours}</Hours>
            </Info>
          <ArrowLeftUpWhite/>
          </Message>
        ))}
      </MessageContainter>
      <Footer>
        <ChatButton onPress={() => navigation.navigate('Recomendations')}>
        <FontAwesome5 name="robot" size={40} color="black" />
        </ChatButton>
      </Footer>
    </Container>
  );
};

export default Reminders;
