/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtos from './components/Products';
import Detalhe from './components/Detalhe';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Produtos} options={{ title: 'Loja de luminárias' }} />
        <Stack.Screen name="Detalhes" component={Detalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;