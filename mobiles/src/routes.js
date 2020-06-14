import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Reminders';
import Recomendations from './pages/Recomendations/index';
import RecomendationWebView from './pages/RecomendationWebView/index';
const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator       
      screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Recomendations" component={Recomendations} />
      <Stack.Screen name="RecomendationWebView" component={RecomendationWebView} />
      
    </Stack.Navigator>
  );
}

export default Routes;
