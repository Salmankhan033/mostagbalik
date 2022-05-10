import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';

const HeaderComponent = ({Home = false, title, navigation}) => {
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
              style={{flex: 0.25, paddingHorizontal: 5}}
              onPress={() => navigation.openDrawer()}>
              <FastImage
                source={require('../assets/menu.png')}
                style={{height: 25, width: 40}}
              />
            </TouchableOpacity>
            <View style={{flex: 0.75}}>
              <FastImage
                source={require('../assets/1024.png')}
                style={{height: 35, width: 150}}
              />
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={{flex: 0.25, paddingHorizontal: 5}}
              onPress={() => navigation.goBack()}>
              <FastImage
                source={require('../assets/back_arrow.png')}
                style={{height: 18, width: 18}}
              />
            </TouchableOpacity>
            <View style={{flex: 0.75, paddingLeft: 10}}>
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
    fontWeight: '600',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
