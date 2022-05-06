import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Typography from '../../constants/typography';
import Header from './components/header';
import Button from '../../../components/Button';
import Card from './components/card';
import Swiper from 'react-native-swiper';

const Home = props => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <FastImage
            style={styles.headerImg}
            source={require('../../assets/Group.png')}
          />
        </View>
        <Header />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: 15,
          }}>
          <Text style={styles.title}>What We Provide At Mostagbalik</Text>
          <FastImage
            style={styles.img}
            source={require('../../assets/rowsImgLeft.png')}
          />
        </View>
        <Card
          title={'Abroad Studies'}
          description={
            'There are many variations of passages lorem Ipsum available, but the thing is majority have suffered alteration in some form, injected humor, or randomized words.'
          }
        />
        <Card
          title={'Further Education'}
          description={
            'There are many variations of passages lorem Ipsum available, but the thing is majority have suffered alteration in some form, injected humor, or randomized words.'
          }
        />
        <Card
          title={'Expert Consultancy'}
          description={
            'There are many variations of passages lorem Ipsum available, but the thing is majority have suffered alteration in some form, injected humor, or randomized words.'
          }
        />

        <View>
          <View
            style={{
              marginBottom: '15%',
              paddingVertical: 15,
              backgroundColor: '#fff',
            }}>
            <FastImage
              style={styles.img}
              source={require('../../assets/rowsImg.png')}
            />
            <View style={{paddingHorizontal: '20%'}}>
              <Text style={styles.aboutUsTitle}>
                {'What Our Client Say About Us.'}
              </Text>
            </View>
            <View style={{}}></View>
            <Swiper
              style={{height: hp('35%')}}
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
              <View style={styles.Card}>
                <Text style={styles.cardDescription}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humor, or randomized words. alteration in
                  some form, by injected humor.
                </Text>
                <Text style={styles.name}>Abdullah Ahmad</Text>
              </View>
              <View style={styles.Card}>
                <Text style={styles.cardDescription}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humor, or randomized words. alteration in
                  some form, by injected humor.
                </Text>
                <Text style={styles.name}>Abdullah Ahmad</Text>
              </View>
              <View style={styles.Card}>
                <Text style={styles.cardDescription}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humor, or randomized words. alteration in
                  some form, by injected humor.
                </Text>
                <Text style={styles.name}>Abdullah Ahmad</Text>
              </View>
            </Swiper>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
          title={'BOOK AN APPOINTMENT'}
          leftIcon={require('../../assets/calenderIcon.png')}
          onPress={() => props.navigation.navigate('BookAppointment')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex:1
  },
  headerImg: {
    height: hp('25%'),
    width: wp('100%'),
  },
  btnContainer: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
  title: {
    fontSize: Typography.FONT_SIZE_24,
    fontWeight: '700',
    lineHeight: 33,
    textAlign: 'center',
    marginTop: '8%',
    marginRight: 5,
  },
  img: {
    height: hp('7%'),
    width: wp('17%'),
    // alignSelf:'flex-end'
  },
  aboutUsTitle: {
    fontSize: Typography.FONT_SIZE_24,
    fontWeight: '700',
    lineHeight: 33,
    textAlign: 'center',
    marginTop: '8%',
    // marginRight: 5,
  },
  Card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 15,
    padding: 15,
    borderBottomColor: '#0B5DA6',
    borderBottomWidth: 8,
  },
  cardDescription: {
    fontSize: Typography.FONT_SIZE_16,
    alignSelf: 'center',
    fontWeight: '400',
    lineHeight: 24,
    color: '#999',
  },
  name: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: '600',
    lineHeight: 24,
    marginTop: 10,
  },
});
