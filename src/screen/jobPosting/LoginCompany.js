import {View, Text} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../common/CustomTextInput';
import SolidBtn from '../../common/SolidBtn';
import BorderBtn from '../../common/BorderBtn';
import { useNavigation } from '@react-navigation/native';

const LoginCompany = () => {
    const  navigation = useNavigation()
  return (
    <View>
      <View
        style={{
          marginTop: responsiveHeight(12),
          marginBottom: responsiveHeight(2),
        }}>
        <Text
          style={{
            color: '#5169F6',
            textAlign: 'center',
            fontSize: responsiveFontSize(3.6),
            fontWeight: 'bold',
          }}>
          Login Here
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: responsiveHeight(3.2),
            fontSize: responsiveFontSize(2.7),
            color: 'black',
            fontWeight: '500',
          }}>
          {"    Welcome Back\nYou've been missed!"}
        </Text>
      </View>
      <View>
        <CustomTextInput
          title={'Email'}
          placeholder={'ashishrahul748@gmail.com'}
        />
        <CustomTextInput title={'Password'} placeholder={'Password'} />
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2),
            alignSelf: 'flex-end',
            marginRight: responsiveWidth(10),
            fontWeight:'500'
          }}>
          Forgot Password ?
        </Text>

        <SolidBtn title={'Sign In'}/>
        <BorderBtn onClick={()=>navigation.navigate('SignUpCompany')} title={'Create Account'}/>
      </View>
    </View>
  );
};

export default LoginCompany;
