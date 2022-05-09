import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SwiperComponent from '../../../components/swiper';
import Swiper from 'react-native-swiper';
import Button from '../../../components/Button';
import * as Colors from '../../constants/colors';

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.Curious_Blue}}>
      <View style={{backgroundColor: Colors.White}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={Colors.Curious_Blue}
          translucent={true}
        />
        <View style={styles.wrapper}>
          <Swiper
            //   horizontal={true}
            style={styles.wrapper}
            // showsButtons={true}
            // showsPagination={true}
            // showsPaginationStyle={{height: 20, width: 30}}

            dotColor={'red'}
            activeDotColor={'blue'}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: 22,
                  height: 3,
                  borderRadius: 2,
                  marginLeft: 3,
                  marginRight: 3,
                  marginBottom: hp('2%'),
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#007aff',
                  width: 22,
                  height: 4,
                  borderRadius: 2,
                  marginLeft: 3,
                  marginRight: 3,
                  marginBottom: hp('2%'),
                }}
              />
            }>
            <SwiperComponent />
            <SwiperComponent />
            <SwiperComponent />
          </Swiper>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'GET STARTED'}
          onPress={() => navigation.navigate('Drawer')}
          rightIcon={require('../../assets/leftArrow.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  wrapper: {
    height: hp('80%'),
    backgroundColor: Colors.White,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 25,
    right: 10,
    left: 10,
  },
});
