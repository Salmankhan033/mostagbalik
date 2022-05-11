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
import HeaderComponent from '../components/headerComponent';

const ChangeNumber = (props) => {
  const [mobileNo, setMobileNo] = useState('');
  return (
    <View style={{backgroundColor: Colors.White, flex: 1}}>
    <HeaderComponent Drawer={true} title={"Change Number"} navigation={props.navigation}/>
      <View style={styles.container}>
        <Text style={styles.txt}>{"MOBILE NUMBER"}</Text>
        <TextInput
          placeholder="MOBILE NUMBER"
          style={styles.inputs}
          keyboardType={'phone-pad'}
          value={mobileNo}
          onChangeText={text => setMobileNo(text)}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title={'Update'} onPress={() => {}} />
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
    fontFamily:"OpenSans-Medium",
    fontSize:Typography.FONT_SIZE_14,
    lineHeight:19,
    marginTop: hp('2%'),
  },
  inputs: {
    height: hp('6%'),
    width: wp('92%'),
    alignSelf: 'center',
    borderColor: Colors.selectedButton,
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
