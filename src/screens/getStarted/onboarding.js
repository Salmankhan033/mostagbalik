import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SwiperComponent from '../../../components/swiper';
import Swiper from 'react-native-swiper';
import Button from '../../../components/Button';

const Onboarding = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#0B5DA6"
        translucent={true}
      />
      <View style={styles.wrapper}>
        <Swiper
          //   horizontal={true}
          // style={styles.wrapper}
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
                height: 4,
                borderRadius: 2,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
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
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }>
          <SwiperComponent />
          <SwiperComponent />
          <SwiperComponent />
        </Swiper>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'GET STARTED'}
          onPress={() => navigation.navigate('Drawer')}
          rightIcon={require('../../assets/leftArrow.png')}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  wrapper: {
    height: hp('90%'),
  },
  buttonContainer: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 25,
    right: 10,
    left: 10,
  },
});
