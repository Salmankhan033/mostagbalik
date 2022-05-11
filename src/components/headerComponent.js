import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const HeaderComponent = ({Home = false, title, navigation,Drawer= false}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Home ? Colors.San_Marino : Colors.White},
      ]}>
      <View style={styles.subContainer}>
        {Home ? (
          <>
            <TouchableOpacity
              style={{flex: 0.33, paddingHorizontal: 5}}
              onPress={() => navigation.openDrawer()}>
              <FastImage
                source={require('../assets/left_men.png')}
                style={{height: 21, width: 28}}
              />
            </TouchableOpacity>
            <View style={{flex: 0.67}}>
              <FastImage
                source={require('../assets/logo.png')}
                style={{height: 25, width: 123, marginTop:15}}
              />
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={{flex: 0.24, paddingHorizontal: 5}}
              onPress={() =>Drawer ? navigation.openDrawer() : navigation.goBack()}>
              <FastImage
                source={require('../assets/back_arro.png')}
                style={{height: 18, width: 18}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <View style={{flex: 0.84, paddingLeft: 10}}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    height: '8%',
    justifyContent: 'center',
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily:"OpenSans-Bold",
    color:Colors.Black,
    lineHeight:21,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
