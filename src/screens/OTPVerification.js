import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';
import Button from '../../components/Button';
import HeaderComponent from '../components/headerComponent';

const OTPVerification = props => {
  const [isValidRequest, setIsValidRequest] = useState(false);
  const [code, setCode] = useState('');
  const [counter, SetCounter] = useState(60); // Set here your own timer configurable
  const [random, SetRandom] = useState(Math.random());
  const [disabled, setDisabled] = useState(true);
  const submitCode = length => {
    if (length < 5) {
      setIsValidRequest(false);
    } else if (length === 0) {
      setIsValidRequest(false);
    } else if (length === 5) {
      setIsValidRequest(true);
    }
  };
  const handleResend = () => {
    SetRandom(Math.random());
    // Handle Resend otp action here
  };

  return (
    <View style={{backgroundColor: Colors.White, flex: 1}}>
    <HeaderComponent navigation={props.navigation}/>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Verification Code</Text>
        <Text style={styles.bodyText}>
          SMS with code has been {'\n'}sent to 65893265
        </Text>
      </View>

      <OTPInputView
        style={styles.otpInput}
        pinCount={4}
        code={code}
        onCodeChanged={code => {
          setCode(code);
          submitCode(code.length);
        }}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {}}
      />
      <View style={styles.resendView}>
        <CountDown
          key={random}
          until={counter}
          size={11}
          onFinish={() => setDisabled(() => false)}
          separatorStyle={{color: 'black'}}
          digitStyle={{backgroundColor: '#FFF'}}
          digitTxtStyle={{color: 'black'}}
          timeToShow={['M', 'S']}
          showSeparator
          timeLabels={{m: '', s: ''}}
        />
        <TouchableOpacity onPress={() => alert('RESEND')}>
          <Text style={styles.resendText}>resend</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <Button
          title={'VERIFY'}
          onPress={() =>
            props.navigation.push('NextAppointment', {
              type: 'otp',
            })
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerTextView: {
    width: wp('92%'),
    height: hp('18%'),

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: Typography.FONT_SIZE_24,
    fontFamily:"OpenSans-Bold",
    color:Colors.Black,
    textAlign: 'center',
    height: hp('6%'),
  },
  bodyText: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily:"OpenSans-Regular",
    textAlign: 'center',
    lineHeight:24,
    height: hp('6%'),
  },
  otpInput: {
    width: wp('70%'),
    height: hp('10%'),
    alignSelf: 'center',
  },

  underlineStyleBase: {
    width: wp('10%'),
    height: hp('6%'),
    alignSelf: 'center',
    borderWidth: 0,
    borderBottomWidth: 1,
    color: Colors.light_blue,
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    borderColor: Colors.light_blue,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.lightGray,
  },
  resendView: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('10%'),
    width: wp('92%'),
    alignSelf: 'center',
  },
  resendText: {
    fontFamily:"OpenSans-Regular",
    color: Colors.lightGray,
    marginLeft: wp('1%'),
  },
  btnView: {
    width: wp('92%'),
    alignSelf: 'center',
  },
});

export default OTPVerification;
