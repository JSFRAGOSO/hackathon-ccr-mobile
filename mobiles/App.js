import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView} from 'react-native';

export default function App() {
  return (
    
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"} >
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
