import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import moment from 'moment';

import * as Typography from '../constants/typography';
import * as Colors from '../constants/colors';

const RenderCard = ({
  selectedData,
  realData,
  renderData,
  timeFomat,
  date,
  typeCB,
}) => {
  const __date = moment(date).format('YYYY-MM-DD');
  let _time = moment(__date + 'T' + renderData).format(
    timeFomat == 12 ? 'hh:mm a' : 'HH:mm',
  );
  return (
    <TouchableOpacity
      style={styles.BussinessTypeView}
      onPress={() => {
        selectedData(renderData);
      }}>
      <Text style={styles.bussinessTypeText}>
        {typeCB !== 'timeSlot' ? renderData.toString() : _time}
      </Text>
      {realData == renderData ? (
        <FastImage
          source={require('../assets/green_check.png')}
          style={styles.checkIcon}
        />
      ) : (
        <Text></Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  BussinessTypeView: {
    width: wp('92%'),
    height: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: hp('0.05%'),
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  bussinessTypeText: {
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.Black,
  },
  checkIcon: {
    width: wp('5%'),
    height: wp('5%'),
  },
});

export default RenderCard;
