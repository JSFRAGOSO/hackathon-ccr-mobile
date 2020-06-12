import React,{useEffect,useState} from 'react';
import { View, Image,Text,TextInput,TouchableOpacity, ScrollView} from 'react-native';
import { StyleSheet } from 'react-native';
import api from '../services/api';
function Main({navigation}) {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    async function loadReminders() {
      const response = await api.get('/reminders');
      setReminders(response.data);
    }
    loadReminders();
  }, []);

    return (
    <View style={styles.main}>
      
      
      <View style={styles.messageContainer}>
        <Text style={styles.headerTitle}>Seus lembretes do dia</Text>
        
          {
          reminders.map(reminder => (
            <View style={{paddingHorizontal:10}} key={reminder._id}>
              <TouchableOpacity>
                
                <View key={reminder._id}style={styles.message}>
                  <Image 
                    style = {styles.thumbnail}
                    source={{ uri: reminder.thumbnail_url }} 
                  />
                  <View style = {styles.info}>
                    <Text style={styles.title}>{reminder.title}</Text>
                    <Text style={styles.hours}>{reminder.hours}</Text>
                  </View>
                </View>
                <View style = {styles.arrow}/>  
              </TouchableOpacity>
            </View>
          ))
          }
        </View>
    </View>);
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#e5e6f0'
  },
  messageContainer:{
    flex:1,
    marginTop:80,
    alignItems:'center',
  },
  headerTitle:{
    fontWeight:'bold',
    fontSize:21,
    marginBottom:20,
  },
  message: {
    width: 320,
    marginVertical: 10 ,
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'center',
    borderRadius:10,
    marginLeft:30,
    flexDirection:'row',
  },
  thumbnail:{
    width:80,
    height:60,
    borderRadius:4,
    borderWidth:4,
  },
  info:{
    flexDirection:'column',
    marginLeft: 20
  },
  title:{
    fontWeight:'bold',
    fontSize:16,
  },
  hours:{
    marginTop:5,
    color:'#666',
  },
  arrow: {
    position:'absolute',
    right:-18,
    top:10,
    width: 0, 
    height: 0, 
    borderLeftWidth:20,
    borderRightWidth:20,
    borderLeftColor:'#fff',
    borderRightColor:'#e5e6f0',
    borderTopWidth:20,
    borderTopColor:'#fff'
  }
})
/*
  #e5e6f0
    border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  
  border-top: 20px solid #f00;
*/
export default Main


