import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';

const ModalListView = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visiblity}
      onRequestClose={() => {
        props.changeVisibility(false);
      }}>
      <View style={styles.modalView}>
        <View style={styles.modalTop}>
          <TouchableOpacity
            style={styles.cancelTouch}
            onPress={() => props.changeVisibility()}
            activeOpacity={0.8}>
            <FastImage
              source={require('../assets/close.png')}
              style={styles.cancelIcon}
            />
          </TouchableOpacity>
          <Text style={props?.normalTitle ? styles.normalTitle : styles.title}>
            {props.title}
          </Text>
        </View>
        <FlatList
          data={props.data}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            return props.renderItem(item);
          }}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: Colors.White,
    width: wp('100%'),
    alignItems: 'center',
    height: hp('100%'),
    alignItems: 'center',
    paddingTop: hp('6%'),
    justifyContent: 'center',
    paddingBottom: Platform.OS === 'ios' ? hp('0') : hp('5%'),
  },
  cancelIcon: {
    width: wp('9%'),
    height: wp('9%'),
    marginHorizontal: wp('2%'),
  },
  cancelTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? hp('2%') : hp('1%'),
    height: hp('5%'),
  },
  modalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.Black,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_24,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  normalTitle: {
    color: Colors.Black,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    padding: 10,
  },
});
export default ModalListView;
