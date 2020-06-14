import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Reminders from './pages/Reminders';
import Main from './pages/Main';
import Recomendations from './pages/Recomendations';
import RecomendationNews from './pages/RecomendationNews';
import RecomendationWebView from './pages/RecomendationWebView';
import Intro from './pages/Intro';
import Explanation from './pages/Explanation';
import Important from './pages/Important';
const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator       
      screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Explanation" component={Explanation} />
      <Stack.Screen name="Important" component={Important} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Reminders" component={Reminders} />
      <Stack.Screen name="Recomendations" component={Recomendations} />
      <Stack.Screen name="RecomendationNews" component={RecomendationNews} />
      <Stack.Screen name="RecomendationWebView" component={RecomendationWebView} />
      
    </Stack.Navigator>
  );
}

export default Routes;
