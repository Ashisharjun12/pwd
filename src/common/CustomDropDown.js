import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomDropDown = ({title, placeholder,onClick}) => {
  return (
    <View
      style={{
        width: responsiveWidth(90),
        height: responsiveHeight(6.8),
        backgroundColor: '#F1F4FF',
        borderWidth: 0.2,
        alignSelf: 'center',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(1.5),
        borderRadius: 3.5,
        justifyContent: 'center',
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(2.2),
          alignSelf: 'flex-start',
          marginLeft: responsiveWidth(5),
          top: responsiveHeight(-1.2),
          position: 'absolute',
          backgroundColor: '#F1F4FF',
          paddingLeft: responsiveWidth(2),
          paddingRight: responsiveWidth(2),
        }}>
        {title}
      </Text>
      <TouchableOpacity onPress={()=>onClick()} style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
      <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(2),
          paddingLeft: responsiveWidth(2),
        }}>
        {placeholder}
      </Text>
      
      <AntDesign  name="downcircleo" color={'grey'} size={30} />
      
      

      </TouchableOpacity>
      
    </View>
  );
};

export default CustomDropDown;
