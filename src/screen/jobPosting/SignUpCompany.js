import {View, Text, ScrollView} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../common/CustomTextInput';
import SolidBtn from '../../common/SolidBtn';
import BorderBtn from '../../common/BorderBtn';
import {useNavigation} from '@react-navigation/native';

const SignUpCompany = () => {
  const navigation = useNavigation();

//name
const [name ,setName] =useState('')
const [badName ,setBadName]= useState('')

//email
const [email ,setEmail] =useState('')
const [badEmail ,setBadEmail]= useState('')

//contact
const [contact ,setcontact] =useState('')
const [badContact ,setBadContact]= useState('')

//companyName
const [companyName ,setCompanyName] =useState('')
const [badCompanyName ,setBadCompanyName]= useState('')



//Address
const [Address ,setAddress] =useState('')
const [badAddress ,setBadAddress]= useState('')


//Paassword
const [password ,setPassword] =useState('')
const [badPaassword ,setBadPassword]= useState('')


//validation
const validate = ()=>{
  let validEmail = true;
  
}


  return (
    <ScrollView>
      <View
        style={{
          marginTop: responsiveHeight(5.5),
          marginBottom: responsiveHeight(3),
        }}>
        <Text
          style={{
            color: '#5169F6',
            textAlign: 'center',
            fontSize: responsiveFontSize(3.6),
            fontWeight: 'bold',
          }}>
          Udyog Saarthi
        </Text>
      </View>
      <View>
        <CustomTextInput value={name} onChangeText={txt =>{setName(txt)}} title={'Name'} placeholder={'Ashish Raj'} />
        <CustomTextInput
        value={email} onChangeText={txt =>{setEmail(txt)}}
          title={'Email'}
          placeholder={'ashishrahul748@gmail.com'}
        />
        <CustomTextInput value={contact} onChangeText={txt =>{setcontact(txt)}} title={'Contact'} placeholder={'+91-000000989'} />
        <CustomTextInput value={companyName} onChangeText={txt =>{setCompanyName(txt)}} title={'Company Name'} placeholder={'Ex-microsoft'} />
        <CustomTextInput value={Address} onChangeText={txt =>{setAddress(txt)}} title={'Address'} placeholder={'Company Address'} />
        <CustomTextInput value={password} onChangeText={txt =>{setPassword(txt)}} title={'Password'} placeholder={'Password'} />

        <SolidBtn onClick={() => {}} title={'Sign Up'} />
        <BorderBtn onClick={() => navigation.goBack()} title={'Login'} />
      </View>
    </ScrollView>
  );
};

export default SignUpCompany;
