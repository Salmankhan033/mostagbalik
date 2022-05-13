import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import React, {useState} from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';
import Button from '../../../components/Button';
import RepeatCard from '../../components/RepeatCard';
import ModalListView from '../../components/ModalListView';
import RenderCard from '../../components/RenderCard';
import HeaderComponent from '../../components/headerComponent';
const NextBookAppointments = props => {
  let type = props.route?.params ? props.route.params.type : '';
  const [appointmentsVisibility, setAppointmentsVisibility] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const [purpose, setPurpose] = useState('Abroad Studies');
  const data = [
    {title: 'Abroad Studies'},
    {title: 'Career Pursuing'},
    {title: 'Future Studies'},
    {title: 'Abroad Studies 3'},
    {title: 'Scholarships'},
    {title: 'Abroad Scholarships'},
    {title: 'Other'},
  ];
  const onPurposeData = item => {
    setPurpose(item);

    setAppointmentsVisibility(false);
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <KeyboardAwareScrollView style={{backgroundColor: Colors.White}}>
      <HeaderComponent
        navigation={props.navigation}
        title={'Book Appointment'}
      />
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.txt}>PURPOSE OF VISIT</Text>
          <RepeatCard
            type={false}
            lable="Start Time"
            onPress={() => setAppointmentsVisibility(true)}
            icon={true}
            bodyText={purpose}
          />
          {appointmentsVisibility == true && (
            <ModalListView
              data={data}
              renderItem={item => (
                <RenderCard
                  realData={purpose}
                  renderData={item.title}
                  selectedData={onPurposeData}
                  date={data}
                  typeCB={'PURPOSE OF VISIT'}
                />
              )}
              title={'PURPOSE OF VISIT'}
              visiblity={appointmentsVisibility}
              changeVisibility={() => setAppointmentsVisibility(false)}
            />
          )}

          <Text style={styles.txt}>NOTE</Text>
          <TextInput multiline numberOfLines={4} style={styles.input} />
          {type ? null : (
            <>
              <Text style={styles.txt}>MOBILE NUMBER</Text>
              <TextInput
                placeholder="MOBILE NUMBER"
                style={styles.inputs}
                keyboardType={'phone-pad'}
                value={mobileNo}
                onChangeText={text => setMobileNo(text)}
              />
            </>
          )}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title={type ? 'CONFIRM BOOKING' : 'CONTINUE'}
          onPress={() =>
            type
              ? props.navigation.navigate('AppointmentsConfirmation')
              : props.navigation.navigate('OTPVerification')
          }
        />
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

    height: hp('91%'),
  },
  input: {
    height: hp('20%'),
    borderColor: Colors.lightGray,
    borderWidth: hp('0.1%'),
    padding: 10,
    borderRadius: hp('1%'),
    textAlign: 'left',
    textAlignVertical: 'top',
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
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.text,
    fontFamily: 'OpenSans-Medium',
    textAlignVertical: 'center',
    marginTop: hp('2%'),
  },
  btnContainer: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? 35 : 1,
    left: 10,
    right: 10,
  },
});
export default NextBookAppointments;
