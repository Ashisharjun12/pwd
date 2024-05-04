import { View, Text, TouchableOpacity, Modal } from 'react-native';
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
import firestore from '@react-native-firebase/firestore';
import Loader from '../../common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginUser = () => {
  const navigation = useNavigation();

  // email
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');

  // password
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');

  // loading
  const [loading, setLoading] = useState(false);

  // validation
  const validate = () => {
    // Email validation
    if (!email.trim()) {
      setBadEmail('Please enter email');
      return false;
    } else {
      setBadEmail('');
    }

    // Password validation
    if (!password.trim()) {
      setBadPassword('Please enter password');
      return false;
    } else {
      setBadPassword('');
    }

    return true;
  };

  // method handle login
  const handleLogin = () => {
    if (validate()) {
      setLoading(true);
      // Example Firestore query and authentication logic...
      firestore()
        .collection('users')
        .where('email', '==', email)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            const userData = querySnapshot.docs[0].data();
            if (userData.password === password) {
              // Store user data in AsyncStorage
              AsyncStorage.setItem('userData', JSON.stringify(userData));
              setLoading(false);
              // Navigate to appropriate screen based on condition
              if (userData.type === 'Normal') {
                navigation.navigate('NormalScreen');
              } else {
                navigation.navigate('BlindAmputeeScreen');
              }
            } else {
              setBadPassword('Incorrect password');
              setLoading(false);
            }
          } else {
            setBadEmail('No user found');
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error getting documents: ', error);
          setLoading(false);
        });
    }
  };

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
          Welcome Back, You've been missed!
        </Text>
      </View>
      <View>
        <CustomTextInput
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          title={'Email'}
          placeholder={'Enter your email'}
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
          onChangeText={(txt) => setPassword(txt)}
          title={'Password'}
          placeholder={'Enter your password'}
          secureTextEntry={true}
        />
        {badPassword != '' && (
          <Text
            style={{
              color: 'red',
              fontSize: responsiveFontSize(1.9),
              marginLeft: responsiveWidth(7),
            }}>
            {badPassword}
          </Text>
        )}
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2),
            alignSelf: 'flex-end',
            marginRight: responsiveWidth(10),
            fontWeight: '500',
            marginTop: responsiveHeight(2),
          }}>
          Forgot Password?
        </Text>
        <SolidBtn onClick={handleLogin} title={'Sign In'} />
        <BorderBtn
          onClick={() => navigation.navigate('SignUpUser')}
          title={'Create Account'}
        />
      </View>
      <Loader visible={loading} />
    </View>
  );
};

export default LoginUser;
