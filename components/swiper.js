import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Typography from './../src/constants/typography';
import * as Colors from './../src/constants/colors';
const SwiperComponent = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <FastImage
          style={styles.img}
          source={require('./../src/assets/image.png')}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Get your educational consultancy with us
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.description}>
            Get an overview of how you are performing and motivate yourself to
            achieve even moew.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SwiperComponent;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: wp(120),
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: Typography.FONT_SIZE_24,
    lineHeight: 33,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.Black,
  },
  description: {
    fontSize: Typography.FONT_SIZE_14,
    lineHeight: 19,
    textAlign: 'center',
    color: Colors.Gray44,
  },
});
