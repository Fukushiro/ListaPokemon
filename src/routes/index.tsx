import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import App from './App';
import Home from '../pages/Home';
import PokemonView from '../pages/PokemonView';
// import { Container } from './styles';
const Stack = createDrawerNavigator();
const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default routes;
