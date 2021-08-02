import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Container } from './styles';
import Home from '../pages/Home';
import PokemonView from '../pages/PokemonView';
const Stack = createDrawerNavigator();
const routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      {(() => {
        let coisas = [];
        for (let i = 1; i < 201; i++) {
          let nome = 'poke' + i;
          coisas.push(
            <Stack.Screen name={'poke' + i} key={i}>
              {(props) => <PokemonView {...props} id={i} />}
            </Stack.Screen>
          );
        }
        return coisas;
      })()}
      {/* <Stack.Screen name="poke">
        {(props) => <PokemonView {...props} id={1} />}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default routes;
