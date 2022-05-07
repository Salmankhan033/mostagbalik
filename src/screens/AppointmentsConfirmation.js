import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';
import Button from '../../components/Button';

const AppointmentsConfirmation = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.White,
        justifyContent: 'center',
      }}>
      <View style={styles.midContainer}>
        <FastImage
          style={styles.icon}
          resizeMode={'contain'}
          source={require('../assets/confirmed.png')}
        />
        <Text style={styles.headerText}>Thanks for booking!</Text>
        <Text style={styles.bodyTxt}>
          Your appointment has been{'\n'}booked successfully on{'\n'} 20 April
          2022, 10:30 am
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title={'ADD TO CALENDAR'}
          leftIcon={require('../assets/calenderIcon.png')}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  midContainer: {
    width: wp('92%'),
    height: hp('60%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    alignSelf: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    width: wp('50%'),
    height: hp('20'),
  },
  headerText: {
    fontSize: Typography.FONT_SIZE_24,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginVertical: hp('3%'),
  },
  bodyTxt: {
    textAlign: 'center',
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.Gray44,
  },
  btnContainer: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
});

export default AppointmentsConfirmation;
