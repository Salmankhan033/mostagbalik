import {View, Text} from 'react-native';
import React from 'react';
import Navigations from './src/navigation/Navigations';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyAppointments from './src/screens/appointments/MyAppointments';
import BookAppointment from './src/screens/appointments/BookAppointment';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1, marginTop: 30}}>
      {/* <NavigationContainer>
        <Navigations />
      </NavigationContainer> */}
      <BookAppointment />
    </View>
  );
};

export default App;
