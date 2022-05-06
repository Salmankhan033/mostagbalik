import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import AboutUs from '../screens/AboutUs';
import Onboarding from '../screens/getStarted/onboarding';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Article" component={AboutUs} />
    </Drawer.Navigator>
  );
}

const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
    <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
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
