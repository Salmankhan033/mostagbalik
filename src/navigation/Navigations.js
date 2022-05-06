import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OnBoardingScreen from '../screens/OnBoardingScreen';

import ChangeNumber from '../screens/ChangeNumber';
import AboutUs from '../screens/AboutUs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={ChangeNumber} />
      <Drawer.Screen name="Article" component={AboutUs} />
    </Drawer.Navigator>
  );
}

const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoardingScreen">
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
