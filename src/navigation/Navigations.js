import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Onboarding from '../screens/getStarted/onboarding';
import Home from '../screens/home/Home';
import BookAppointment from '../screens/appointments/BookAppointment';
import MyAppointments from '../screens/appointments/MyAppointments';
import NextBookAppointments from '../screens/appointments/NextBookAppointments';
import OTPVerification from '../screens/OTPVerification';
import SplashScreen from './SplashScreen';
import '../constants/DCSLocalize'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Mostagbalik" component={Home} 
         options={{
          headerStyle: {
            backgroundColor: '#65ABEF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      {/* <Drawer.Screen name="Article" component={AboutUs} /> */}
    </Drawer.Navigator>
  );
}

const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        // options={{
        //   // title: 'My home',
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
      />

      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BookAppointment}
        options={{title: 'Book Appointment'}}
      />
      <Stack.Screen
        name="MyAppointment"
        component={MyAppointments}
        options={{title: 'My Appointment'}}
      />
      <Stack.Screen
        name="NextAppointment"
        component={NextBookAppointments}
        options={{title: 'My Appointment'}}
      />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerification}
        options={{title: null}}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
