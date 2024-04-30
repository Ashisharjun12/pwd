import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
const GoBack = () => {
    const navigation =useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: responsiveWidth(5), marginTop: responsiveHeight(2) }}>
    <Ionicons name="arrow-back-sharp" color={'black'} size={30} />
  </TouchableOpacity>
  )
}

export default GoBack