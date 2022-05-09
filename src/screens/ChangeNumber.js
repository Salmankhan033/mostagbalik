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

import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';
import Button from '../../components/Button';

const ChangeNumber = () => {
  const [mobileNo, setMobileNo] = useState('');
  return (
    <View style={{backgroundColor: Colors.White, flex: 1}}>
      <View style={styles.container}>
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
          title={type ? 'CONFIRM BOOKING' : 'CONTINUE'}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('92%'),
    alignSelf: 'center',
  },
  txt: {
    height: hp('4%'),
    color: Colors.Gray44,
    textAlignVertical: 'center',
    marginTop: hp('2%'),
  },
  inputs: {
    height: hp('6%'),
    width: wp('92%'),
    alignSelf: 'center',
    borderColor: Colors.light_gray2,
    borderWidth: hp('0.1%'),
    padding: 10,
    borderRadius: hp('0.5%'),
  },
  btnContainer: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
});

export default ChangeNumber;
