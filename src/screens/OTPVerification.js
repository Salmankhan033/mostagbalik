import {View, Text} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OTPVerification = () => {
  return (
    <View>
      <Text>Verification Code</Text>
      <Text>SMS with code has been sent to 65893265</Text>
      <OTPInputView pinCount={5} />
    </View>
  );
};

export default OTPVerification;
