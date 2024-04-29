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
            height: responsiveHeight(54),
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
        <TouchableOpacity onPress={()=>navigation.navigate('JobPostNavigatior')}
          style={{
            width: responsiveWidth(90),
            backgroundColor: '#5169F6',
            height: responsiveHeight(7),
            borderRadius: 8,
            marginTop: responsiveHeight(1.9),
            justifyContent:'center',
            alignItems:'center',
            marginLeft:responsiveWidth(2.7)
            
          }}>

            <Text style={{color:'white',fontSize:responsiveFontSize(2.6)}}>Hire Candinates</Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('JobSearchNavigator')}
          style={{
            width: responsiveWidth(90),
            borderColor:'black',
            borderWidth:1.4,
            height: responsiveHeight(7),
            borderRadius: 8,
            marginTop: responsiveHeight(1.9),
            justifyContent:'center',
            alignItems:'center',
            marginLeft:responsiveWidth(2.7)
            
          }}>

            <Text style={{color:'black',fontSize:responsiveFontSize(2.6)}}>Get Jobs</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectUser;
