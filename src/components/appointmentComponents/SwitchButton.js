/**
 * BarberOne - App
 * Created by Abdullah
 * Copyright © 2022 BarberOne. All rights reserved.
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';

const SwitchButton = props => {
  return (
    <View
      style={
        props.cameFrom ? styles.buttonsContainerForm : styles.buttonsContainer
      }>
      <View style={styles.buttonWraper}>
        <TouchableOpacity
          style={props.defaultSelected ? styles.buttonSelected : styles.button}
          activeOpacity={0.8}
          onPress={() => props.toggleSwitch()}>
          <Text
            style={
              props.defaultSelected
                ? styles.buttonTextSelected
                : styles.buttonText
            }>
            {props.defaultSelectedText}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWraper}>
        <TouchableOpacity
          style={props.swicthSelected ? styles.buttonSelected : styles.button}
          activeOpacity={0.8}
          onPress={() => props.switchToggle()}>
          <Text
            style={
              props.swicthSelected
                ? styles.buttonTextSelected
                : styles.buttonText
            }>
            {props.swicthSelectedText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: Colors.White,
    width: wp('100%'),
    height: hp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonsContainerForm: {
    backgroundColor: Colors.White,
    width: wp('92%'),
    height: hp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  buttonWraper: {
    width: wp('45%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: wp('42 %'),
    height: hp('6%'),
    backgroundColor: Colors.White,
    justifyContent: 'center',
    borderRadius: wp('2%'),
    borderColor: Colors.Black,
    borderWidth: wp('.1%'),
  },
  buttonSelected: {
    width: wp('42%'),
    height: hp('6%'),
    backgroundColor: Colors.White,
    justifyContent: 'center',
    borderRadius: wp('2%'),
    borderColor: Colors.Black,
    borderWidth: wp('.4%'),
  },
  buttonText: {
    alignSelf: 'center',
    color: Colors.Black,
    fontSize: Typography.FONT_SIZE_12,
  },
  buttonTextSelected: {
    alignSelf: 'center',
    color: Colors.Black,
    fontSize: Typography.FONT_SIZE_12,
  },
});

export default SwitchButton;
