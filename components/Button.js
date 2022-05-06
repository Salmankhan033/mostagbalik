import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
const Button = ({onPress,title, leftIcon, rightIcon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
    <FastImage style={styles.icon} source={leftIcon}/>
      <Text style={styles.text}>{title}</Text>
    <FastImage style={styles.icon} source={rightIcon}/>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        width:'100%',
        paddingVertical:12,
        backgroundColor:'#65ABEF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        flexDirection:'row'
    },
    text:{
        color:'#fff'
    },
    icon:{
        height: hp(2.5),
        width: wp(5),
        marginHorizontal:10
    }
})