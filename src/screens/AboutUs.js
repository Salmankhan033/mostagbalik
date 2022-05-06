import {View, Text} from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <View>
      <SwitchButton
        defaultSelected={dailyCalendar}
        swicthSelected={threeDayCalendar}
        toggleSwitch={() => fetchDailyCalendar()}
        switchToggle={() => fetchThreeDayCalendar()}
        defaultSelectedText={'Daily'}
        swicthSelectedText={'3 Day'}
      />
    </View>
  );
};

export default AboutUs;
