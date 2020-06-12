import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Profile from './pages/Profile';
const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator       
      screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#e5e6f0' },
    }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default Routes;
