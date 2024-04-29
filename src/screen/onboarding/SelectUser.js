import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const SelectUser = () => {
    const navigation = useNavigation();
  return (
    <View
    style={{marginLeft: responsiveWidth(2), marginRight: responsiveWidth(2)}}>
    <View>
      <Image
        style={{
          resizeMode: 'contain',
          height: responsiveHeight(58),
          width: responsiveWidth(93),
          marginLeft: responsiveWidth(3),
        }}
        source={require('../../Image/loginwelcome.png')}
      />
    </View>
    <View>
      <Text
        style={{
          color: '#5169F6',
          fontSize: responsiveFontSize(4.6),
          fontWeight: '500',
          textAlign: 'center',
        }}>
        {'Discover Your\nDream Job here'}
      </Text>

      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: responsiveFontSize(2.1),
          fontWeight: '500',
          marginTop: responsiveHeight(4),
        }}>
        {
          'Explore all the existing job roles based on your\ninterest and study major'
        }
      </Text>
    </View>

    <View>
        <TouchableOpacity>
            
        </TouchableOpacity>
    </View>

   
  </View>
  )
}

export default SelectUser