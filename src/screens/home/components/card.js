import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Typography from '../../../constants/typography';
import * as Colors from '../../../constants/colors';

const Card = ({title, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
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
  },
  title: {
    alignSelf: 'center',
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 5,
  },
  description: {
    fontSize: Typography.FONT_SIZE_16,
    alignSelf: 'center',
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.Gray44,
    textAlign: 'center',
  },
});
