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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';
import Button from '../../../components/Button';
import RepeatCard from '../../components/RepeatCard';

const NextBookAppointments = props => {
  const [appointmentsVisibility, setAppointmentsVisibility] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  return (
    <KeyboardAwareScrollView style={{backgroundColor: Colors.White}}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.txt}>PURPOSE OF VISIT</Text>
          <RepeatCard
            type={false}
            lable="Start Time"
            onPress={() => setAppointmentsVisibility(true)}
            icon={true}
            bodyText={'Abroad Studies'}
          />
          <Text style={styles.txt}>NOTE</Text>
          <TextInput multiline numberOfLines={4} style={styles.input} />
          <Text style={styles.txt}>MOBILE NUMBER</Text>
          <TextInput
            placeholder="MOBILE NUMBER"
            style={styles.inputs}
            keyboardType={'phone-pad'}
            value={mobileNo}
            onChangeText={text => setMobileNo(text)}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'CONTINUE'}
            onPress={() => props.navigation.navigate('OTPVerification')}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    width: wp('92%'),

    height: hp('80%'),
  },
  input: {
    height: hp('20%'),
    borderColor: Colors.lightGray,
    borderWidth: hp('0.1%'),
    padding: 10,
    borderRadius: hp('1%'),
  },
  inputs: {
    height: hp('6%'),
    borderColor: Colors.lightGray,
    borderWidth: hp('0.1%'),
    padding: 10,
    borderRadius: hp('1%'),
  },
  txt: {
    height: hp('4%'),
    borderColor: Colors.lightGray,
    textAlignVertical: 'center',
    marginTop: hp('2%'),
  },
  btnContainer: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
});
export default NextBookAppointments;
