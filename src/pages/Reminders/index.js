import React,{useEffect,useState} from 'react';
import api from '../../services/api';

import { 
        TextLogo,
        Container,
        MessageContainter,
        ArrowLeftUpWhite,
        Message,
        Thumbnail,
        Info,
        Title,
        Hours,
        HeaderTitle,
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
    <>
      <Container>
      <TextLogo>CHAPA</TextLogo>
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
      </Container>
    </>
  );
};

export default Reminders;
