import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';

const BookAppointment = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const data = [
    {time: '08:30'},
    {time: '09:40'},
    {time: '10:40'},
    {time: '10:40'},
    {time: '11:40'},
    {time: '12:40'},
    {time: '13:40'},
    {time: '14:40'},
    {time: '15:40'},
    {time: '16:40'},
    {time: '17:40'},
    {time: '18:40'},
    {time: '19:40'},
    {time: '20:40'},
    {time: '21:40'},
  ];
  const separator = () => {
    return <View style={{height: hp('2%')}} />;
  };
  console.log('xjkasnxkjasbcjksbcs', selectedTimeSlot);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.timeView,
          item.time == selectedTimeSlot
            ? {backgroundColor: Colors.San_Marino}
            : null,
        ]}
        onPress={() => setSelectedTimeSlot(item.time)}>
        <Text style={styles.timeTxt}>{item.time}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.CalendarContainer}>
        <Text style={styles.headerTxt}>SELECT DATE</Text>
        <Calendar
          // Initially visible month. Default = now
          current={new Date()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2080-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting

          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        />
      </View>
      <View style={styles.BottomContainer}>
        <Text style={styles.headerTxt}>SELECT DATE</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          key={index => index}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={separator}
          extraData={item => '_' + item.selected}
          numColumns={4}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: hp('5%'),
    width: wp('92%'),
    alignSelf: 'center',
  },
  CalendarContainer: {
    height: hp('45%'),
  },
  headerTxt: {
    fontSize: Typography.FONT_SIZE_15,
    color: Colors.Gray44,
  },
  timeView: {
    marginHorizontal: hp('2%'),
    width: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('5%'),
    borderRadius: hp('1%'),
  },
  timeTxt: {
    fontSize: Typography.FONT_SIZE_13,
    textAlign: 'center',
    justifyContent: 'center',
  },
  BottomContainer: {
    width: wp('92%'),
    alignSelf: 'center',
  },
});
export default BookAppointment;
