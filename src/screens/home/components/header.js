import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import * as Typography from '../../../constants/typography';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
     <FastImage style={styles.img} source={require("../../../assets/rowsImg.png")}/>
      <TouchableOpacity style={styles.titleContainer}>
        <Text style={styles.title}>About Mostagbalik</Text>
        <View style={styles.bottom} />
      </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description} numberOfLines={5}>
          Your future is consultancy that offers fresh highschool graduates a
          detailed overview of choosing majors, career paths and the perfect
          place for higher education.
        </Text>
      </View>
      <TouchableOpacity style={styles.seeMore} onPress={onPress}>
        <Text style={styles.seeMoreText}>{"See More"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingVertical:15,
        backgroundColor:'#fff'
    },
    title: {
        fontSize: Typography.FONT_SIZE_24,
        fontWeight: '700',
        lineHeight: 33,
        textAlign: 'center',
        marginTop: "14%",
        marginLeft:10
      },
      bottom: {
        borderBottomColor: '#65ABEF',
        borderBottomWidth: 2,
        width: wp('20%'),
        alignSelf: 'center',
        borderRadius: 3,
        marginVertical: 5,
      },
      descriptionContainer: {
        padding: 15,
      },
      description: {
        fontSize: Typography.FONT_SIZE_18,
        lineHeight: 28,
        textAlign: 'justify',
        color:"#999999",
        paddingVertical:8
      },
      seeMore:{
          alignSelf:'flex-end',
          paddingHorizontal:15
      },
      seeMoreText:{
        fontSize: Typography.FONT_SIZE_16,
        lineHeight: 19,
        color:"#65ABEF"
      },
      img:{
          height: hp("7%"),
          width: wp("17%")
      }
})