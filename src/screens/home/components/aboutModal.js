import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Modal from 'react-native-modal';
const deviceHeight = Dimensions.get('window').height;
import FastImage from 'react-native-fast-image';
import * as Typography from '../../../constants/typography';
import RBSheet from 'react-native-raw-bottom-sheet';

const AboutModal = ({isVisible, onPress}) => {
  const refRBSheet = useRef();
  console.log('*********', isVisible);
  useEffect(() => {
    if (isVisible) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [isVisible]);
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={false}
        animationType={'slide'}
        customStyles={{
          container: {
            height: '60%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <View
          style={{
            flex: 1,
            padding: 20,
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={styles.title}>{'About Mostagbalik'}</Text>
            <TouchableOpacity style={styles.close} onPress={onPress}>
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
            to create a visual identity and brand system that the team could
            take and run with. After a research of your future's rpose, voice,
            target demographic, and competitive landscape our goal was to create
            an identity system that felt trustworthy, informative, yet still
            entertaining
          </Text>
        </View>
      </RBSheet>
    </View>
  );
};

export default AboutModal;

const styles = StyleSheet.create({
  title: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily:"OpenSans-Bold",
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 5,
    color:"#000",
  },
  description: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily:"OpenSans-Regular",
    color:"#000",
    fontWeight: '400',
    lineHeight: 22,
    // marginBottom:5
  },
  close: {
    marginTop: -12,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
  },
});
