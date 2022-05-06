import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const OnBoardingScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Text>bbbb</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 100}}>OnBoardingScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
