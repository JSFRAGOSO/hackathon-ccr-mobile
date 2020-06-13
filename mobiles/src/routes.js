import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Reminders';
import Recomendations from './pages/Recomendations/index';
const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator       
      screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Recomendations" component={Recomendations} />
    </Stack.Navigator>
  );
}

export default Routes;
