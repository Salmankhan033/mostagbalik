import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeaderComponent from '../components/headerComponent';
const PrivacyPolicy = (props) => {
  return (
    <View style={styles.container}>
    <HeaderComponent Drawer={true} title={"Privacy Policy"} navigation={props.navigation}/>
      <View style={styles.midContainer}>
        <Text style={styles.text}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  midContainer: {
    width: wp('92%'),
    alignSelf: 'center',
    marginVertical: hp('2%'),
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily:"OpenSans-Regular",
    lineHeight:20,
    color: Colors.Gray44,
  },
});

export default PrivacyPolicy;
