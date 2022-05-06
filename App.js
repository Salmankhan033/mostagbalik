import {View, Text} from 'react-native';
import React from 'react';
import Navigations from './src/navigation/Navigations';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </View>
  );
};

export default App;
