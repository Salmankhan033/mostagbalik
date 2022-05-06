import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import DrawerNavigation from './DrawerNavigation';
const MainDrawer = createDrawerNavigator();
const Drawer = ({navigation}) => {
  return (
    <MainDrawer.Navigator
      drawerStyle={{width: '80%'}}
      drawerContentOptions={{
        inactiveTintColor: 'black',
        activeTintColor: '#fff',
        inactiveBackgroundColor: 'white',
        itemStyle: {width: '100%'},
      }}
      drawerContent={props => (
        <DrawerNavigation {...props} />
      )}></MainDrawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  cartIcon: {},
});
