import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import Sobredev from './src/pages/Sobredev'
import Previsao from './src/pages/Previsao'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: 'black',
          }
        }}>
        <Stack.Screen name="Home" component={Menu} options={{ title: 'Menu - App Previsão do Tempo' }} />
        <Stack.Screen name="Previsao" component={PrevPage}options={{ title: 'Como esta o clima hoje?' }}/>
        <Stack.Screen name="Sobredev" component={DevInfo} options={{ title: 'Informações sobre o Desenvolvedor' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;