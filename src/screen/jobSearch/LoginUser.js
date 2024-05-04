<<<<<<< HEAD
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
=======
import { View, Text, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
>>>>>>> b441f7a08da2ac2a3ddfeffc429ef7dcfa0c0b27
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
import { TouchableOpacity, Image } from 'react-native';
import Voice from '@react-native-voice/voice';

const LoginUser = () => {
  const navigation = useNavigation();
<<<<<<< HEAD

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
=======
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  //email
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');

  //password
  const [password, setPassword] = useState('');
  const [badPaassword, setBadPassword] = useState('');

  //loading
  const [loading, setLoading] = useState(false);

  //speech-to-text
  const [isRecognising, setisRecognising] = useState(false);
  const [results, setResults] = useState([]);

  const onSpeechStart = e => {
    console.log(e);
  };
  const onSpeechEnd = e => {
    console.log(e);
  };
  const onSpeechResults = e => {
    setResults(e.value);
    if (e.value.join("").replace(/\s/g, "").toLowerCase() === ("signin")) {
      navigation.navigate();
    }
    else if (e.value.join("").replace(/\s/g, "").toLowerCase() === ("createaccount")) {
      navigation.navigate();
    }
    if (e.value.join("").replace(/\s/g, "").toLowerCase().includes("emailis")) {
      const index = e.value.join("").replace(/\s/g, "").indexOf("com");
      const result = e.value.join("").replace(/\s/g, "").slice(0, index + 3);
      setEmail(result.substring(7));
      console.log(email);
    } else {
      const result = e.value.join("").replace(/\s/g, "");
      setPassword(result);
      console.log(password);
    }
  };

  const startRecognising = async () => {
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecognising = async () => {
    try {
      setResults(results);
      await Voice.stop();
      await Voice.destroy();
    } catch (error) {
      console.log(error);
    }
  };
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

    if (password == '') {
      validPassword = false;
      setBadPassword('Please Enter the Password');
    } else if (password != '' && password.length < 6) {
      validPassword = false;
      setBadPassword('Please Enter min 6 Character');
    } else if (password != '' && password.length > 6) {
      validPassword = true;
      setBadPassword('');
    }

    return validEmail && validPassword;
  };

  //method handel login
  const handleLogin = () => {
    setLoading(true);
    firestore()
      .collection('GetJobs')
      .where('email', '==', email)
      .get()
      .then(data => {
        setLoading(false);
        console.log(data.docs);
        if (data.docs.length > 0) {
          data.docs.forEach(item => {
            if (item.data().password == password) {
              setBadEmail('');
              setBadPassword('');
              goToNextScreen(item.id, item.data().name, item.data().email);
            } else {
              setBadPassword('Wrong Password');
            }
          });
        } else {
          setBadEmail('No User Exist');
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error + 'getting login error');
      });
  };

  //nest screen data
  const goToNextScreen = async (id, email, name) => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USER_ID', id);
    await AsyncStorage.setItem('USER_TYPE', 'company');
    navigation.navigate('DashboardUser');
>>>>>>> b441f7a08da2ac2a3ddfeffc429ef7dcfa0c0b27
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
<<<<<<< HEAD
        {badPassword != '' && (
=======
        {password != '' && (
>>>>>>> b441f7a08da2ac2a3ddfeffc429ef7dcfa0c0b27
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
<<<<<<< HEAD
            marginTop: responsiveHeight(2),
=======
>>>>>>> b441f7a08da2ac2a3ddfeffc429ef7dcfa0c0b27
          }}>
          Forgot Password?
        </Text>
<<<<<<< HEAD
        <SolidBtn onClick={handleLogin} title={'Sign In'} />
=======

        <SolidBtn
          onClick={() => {
            if (validate()) {
              handleLogin();
            }
          }}
          title={'Sign In'}
        />
>>>>>>> b441f7a08da2ac2a3ddfeffc429ef7dcfa0c0b27
        <BorderBtn
          onClick={() => navigation.navigate('SignUpUser')}
          title={'Create Account'}
        />
      </View>
<<<<<<< HEAD
=======
      <TouchableOpacity
        onPress={() => {
          setisRecognising(!isRecognising);
          isRecognising ? stopRecognising() : startRecognising();
        }}>
        {!isRecognising ? (
          <Image
            source={require('../../Image/voice.png')}
            alt="Speech-to-text button"
            style={{
              width: responsiveWidth(20.3),
              height: responsiveHeight(10),
            }}></Image>
        ) : (
          <Image
            source={require('../../Image/active_voice.png')}
            style={{
              width: responsiveWidth(20.3),
              height: responsiveHeight(10),
            }}></Image>
        )}
      </TouchableOpacity>
>>>>>>> b441f7a08da2ac2a3ddfeffc429ef7dcfa0c0b27
      <Loader visible={loading} />
    </View>
  );
};

export default LoginUser;
