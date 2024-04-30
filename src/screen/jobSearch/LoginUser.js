import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../common/CustomTextInput';
import SolidBtn from '../../common/SolidBtn';
import BorderBtn from '../../common/BorderBtn';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import Loader from '../../common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginUser = () => {
    const  navigation = useNavigation()
//email
    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState('');

    //password
    const [password, setPassword] = useState('');
    const [badPaassword, setBadPassword] = useState('');

    //loading
    const [loading ,setLoading] =useState(false)



      //validation
  const validate = () => {
  
    let emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;


    let validEmail = true;
    let validPassword = true;

   


    //email validate

    if (email == '') {
      validEmail = false;
      setBadEmail('Please Enter Email');
    } else if (email != '' && !email.toString().match(emailRegex)) {
      validEmail = false;
      setBadEmail('Please Enter Valid Email');
    } else if (email != '' && email.toString().match(emailRegex)) {
      validEmail = true;
      setBadEmail('');
    }




    //password

    if(password==''){
      validPassword=false;
      setBadPassword("Please Enter the Password")
    }else if(password!='' && password.length<6){
      validPassword=false;
      setBadPassword('Please Enter min 6 Character')
    }else if(password!='' && password.length>6){
      validPassword=true;
      setBadPassword('')
    }

    return validEmail  && validPassword
  };


  //method handel login
  const handleLogin = () => {
    setLoading(true)
    firestore().collection('GetJobs').where('email','==',email).get().then(data=>{
        setLoading(false)
        console.log(data.docs)
        if(data.docs.length>0){
            data.docs.forEach(item=>{
                if(item.data().password==password){
                    setBadEmail("")
                    setBadPassword("")
                    goToNextScreen(item.id,item.data().name,item.data().email)
    
                }else{
                    setBadPassword('Wrong Password')
                }
            })
        }else{
            setBadEmail('No User Exist')
        }
    }).catch(error=>{
        setLoading(false)
        console.log(error +'getting login error')
    })
  }


  //nest screen data
  const goToNextScreen = async(id,email,name)=>{
    await AsyncStorage.setItem('NAME',name)
    await AsyncStorage.setItem('EMAIL',email)
    await AsyncStorage.setItem('USER_ID',id)
    await AsyncStorage.setItem('USER_TYPE','company')
    navigation.navigate('DashboardUser')


  }

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
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
          title={'Email'}
          placeholder={'ashishrahul748@gmail.com'}
        />
        {badEmail != '' && (
          <Text
            style={{
              color: 'red',
              fontSize: responsiveFontSize(1.9),
              marginLeft: responsiveWidth(7),
            }}>
            {badEmail}
          </Text>
        )}
        <CustomTextInput
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
          title={'Password'}
          placeholder={'Password'}
        />
         {password != '' && (
          <Text
            style={{
              color: 'red',
              fontSize: responsiveFontSize(1.9),
              marginLeft: responsiveWidth(7),
            }}>
            {badPaassword}
          </Text>
        )}
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

        <SolidBtn onClick={()=>{
            if(validate()){
                handleLogin()

            }
        }} title={'Sign In'}/>
        <BorderBtn onClick={()=>navigation.navigate('SignUpUser')} title={'Create Account'}/>
      </View>
      <Loader visible={loading}/>
    </View>
  );
};

export default LoginUser;
