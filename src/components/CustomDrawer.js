import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: Colors.White}}>
        <View
          style={{
            height: hp('10%'),
            justifyContent: 'center',
            borderBottomColor: Colors.light_gray2,
            borderBottomWidth: hp('0.1'),

            marginHorizontal: wp('2%'),
          }}>
          <Text
            style={{
              color: Colors.Black,
              fontSize: Typography.FONT_SIZE_20,
              fontWeight: Typography.FONT_WEIGHT_BOLD,

              textAlign: 'left',
            }}>
            Hello
          </Text>
        </View>

        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              style={{width: wp('5%'), height: hp('5%')}}
              resizeMode={'contain'}
              source={require('../assets/logout.png')}
              tintColor={Colors.light_blue}
            />
            <Text
              style={{
                fontSize: Typography.FONT_SIZE_18,
                color: Colors.light_blue,
                marginLeft: wp('2%'),
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;