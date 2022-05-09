import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';
const deviceHeight = Dimensions.get('window').height;
import FastImage from 'react-native-fast-image';
import * as Typography from '../../../constants/typography';

const AboutModal = ({isVisible, onPress}) => {
  return (
    <Modal
      style={{
        margin: 0,
        backgroundColor: 'white',
        top: deviceHeight / 2,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
      isVisible={isVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      deviceHeight={deviceHeight / 2}
      backdropOpacity={0.34}>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={styles.title}>{'About Mostagbalik'}</Text>
          <TouchableOpacity onPress={onPress}>
            <FastImage
              style={{height: 20, width: 20}}
              source={require('../../../assets/cross.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          Your future is consultancy that offers fresh high school graduates a
          detailed overview of choosing majors, career paths and the perfect
          place for higher education {'\n'} {'\n'}Aspects was brought on board
          to create a visual identity and brand system that the team could take
          and run with. After a research of your future's rpose, voice, target
          demographic, and competitive landscape our goal was to create an
          identity system that felt trustworthy, informative, yet still
          entertaining
        </Text>
      </View>
    </Modal>
  );
};

export default AboutModal;

const styles = StyleSheet.create({
  title: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 5,
  },
  description: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: '400',
    lineHeight: 22,
    color: '#999',
    // marginBottom:5
  },
});
