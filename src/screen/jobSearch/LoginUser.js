import { View, Text, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
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
  const [showModal, setShowModal] = useState(false);
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
      navigation.navigate('DashboardUser');
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
    }

    else if (password != '' && password.length > 2) {
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

  };


  //handle switch method

  const handelSwitch = () => {
    setShowModal(true)



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
            fontWeight: '500',
          }}>
          Forgot Password ?
        </Text>

        <SolidBtn
          onClick={() => {
            if (validate()) {
              handleLogin();
              handelSwitch()
            }
          }}
          title={'Sign In'}
        />
        <BorderBtn
          onClick={() => navigation.navigate('SignUpUser')}
          title={'Create Account'}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setisRecognising(!isRecognising);
          isRecognising ? stopRecognising() : startRecognising();
        }}>
        {!isRecognising ? (

          <View style={{ width: responsiveWidth(15), height: responsiveHeight(15), marginTop: responsiveHeight(8), marginLeft: responsiveWidth(6) }}>
            <Image
              source={require('../../Image/voice.png')}
              alt="Speech-to-text button"
              resizeMode='contain'
              style={{
                width: '100%', height: '100%'
              }}></Image>

          </View>

        ) : (
          <View style={{ width: responsiveWidth(15), height: responsiveHeight(15), marginTop: responsiveHeight(8), marginLeft: responsiveWidth(6) }}>

            <Image
              source={require('../../Image/active_voice.png')}
              resizeMode='contain'
              style={{

                width: '100%',
                height: '100%',
              }}></Image>

          </View>

        )}
      </TouchableOpacity>
      <Loader visible={loading} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                marginBottom: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              Screens Switch
            </Text>

            <SolidBtn
              title={'Other Pwds Screen'}
              btnstyle={{ marginRight: responsiveWidth(5.5) }}
              txtbtn={{ fontSize: responsiveFontSize(3) }}
              onClick={() => navigation.navigate('DashboardUser')}
            />
            <SolidBtn
              title={'Blind Screen'}
              btnstyle={{ marginRight: responsiveWidth(5.5) }}
              txtbtn={{ fontSize: responsiveFontSize(3) }}
              onClick={() => navigation.navigate('BlindAmputee')}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginUser;
