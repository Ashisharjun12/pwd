import {View, Text, ScrollView, Alert, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../common/CustomTextInput';
import SolidBtn from '../../common/SolidBtn';
import BorderBtn from '../../common/BorderBtn';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../common/Loader';
import firestore from '@react-native-firebase/firestore';

const SignUpCompany = () => {
  const navigation = useNavigation();

  //name
  const [name, setName] = useState('');
  const [badName, setBadName] = useState('');

  //email
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');

  //contact
  const [contact, setcontact] = useState('');
  const [badContact, setBadContact] = useState('');

  //companyName
  const [companyName, setCompanyName] = useState('');
  const [badCompanyName, setBadCompanyName] = useState('');

  //Address
  const [Address, setAddress] = useState('');
  const [badAddress, setBadAddress] = useState('');

  //Paassword
  const [password, setPassword] = useState('');
  const [badPaassword, setBadPassword] = useState('');

  //loading
  const [loading, setLoading] = useState(false);

  //account create
  const [accontCreate, setAccountCreate] = useState(false);

  //validation
  const validate = () => {
    let emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    let contactRegex = /^\+\d{2,}-\d{6,}$/;

    let validEmail = true;
    let validName = true;
    let validContact = true;
    let validCompanyName = true;
    let validAddress = true;
    let validPassword = true;

    //name validate

    if (name == '') {
      (validName = false), setBadName('Please Enter Your Name');
    } else if (name != '' && name.length < 3) {
      validName = false;
      setBadName('Please Enter Valid Name');
    } else if (name != '' && name.length >= 3) {
      validName = true;
      setBadName('');
    }

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

    //contact validate
    if (contact == '') {
      validContact = false;
      setBadContact('Please Enter Valid Number');
    } else if (contact != '' && contact.length < 10) {
      validContact = false;
      setBadContact('Please Enter Valid Contact');
    } else if (
      contact != '' &&
      !contact.length >= 10 &&
      contact.match(contactRegex)
    ) {
      validContact = false;
      setBadContact('Please Enter Valid Contact');
    } else if (
      contact != '' &&
      contact.length >= 10 &&
      contact.match(contactRegex)
    ) {
      validContact = true;
      setBadContact('');
    }

    //companyname
    if (companyName == '') {
      validCompanyName = false;
      setBadCompanyName('Please Enter this Field');
    } else if (companyName != '') {
      validCompanyName = true;
      setBadCompanyName('');
    }

    //address
    if (Address == '') {
      validAddress = false;
      setBadCompanyName('Please Enter this Field');
    } else if (Address != '') {
      validAddress = true;
      setBadAddress('');
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

    return (
      validEmail &&
      validName &&
      validContact &&
      validCompanyName &&
      validPassword &&
      validAddress
    );
  };

  //register user method

  const registerUser = () => {
    setLoading(true);
    firestore()
      .collection('JobPoster')
      .add({
        name,
        email,
        contact,
        companyName,
        Address,
        password,
      })
      .then(() => {
        setName('');
        setEmail('');
        setcontact('');
        setCompanyName('');
        setAddress('');
        setPassword('');
        setAccountCreate(true);
        setLoading(false);
        setTimeout(() => {
          navigation.goBack();
        }, 2000);
      })
      .catch(error => {
        setLoading(false);
        console.log('You got some error');
      });
  };

  return (
    <SafeAreaView>
      {!accontCreate ? (
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
            <CustomTextInput
              value={name}
              onChangeText={txt => {
                setName(txt);
              }}
              title={'Name'}
              placeholder={'Ashish Raj'}
            />
            {badName != '' && (
              <Text
                style={{
                  color: 'red',
                  fontSize: responsiveFontSize(1.9),
                  marginLeft: responsiveWidth(7),
                }}>
                {badName}
              </Text>
            )}

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
              value={contact}
              onChangeText={txt => {
                setcontact(txt);
              }}
              title={'Contact'}
              placeholder={'+91-000000989'}
            />
            {badContact != '' && (
              <Text
                style={{
                  color: 'red',
                  fontSize: responsiveFontSize(1.9),
                  marginLeft: responsiveWidth(7),
                }}>
                {badContact}
              </Text>
            )}

            <CustomTextInput
              value={companyName}
              onChangeText={txt => {
                setCompanyName(txt);
              }}
              title={'Company Name'}
              placeholder={'Ex-microsoft'}
            />
            {companyName != '' && (
              <Text
                style={{
                  color: 'red',
                  fontSize: responsiveFontSize(1.9),
                  marginLeft: responsiveWidth(7),
                }}>
                {badCompanyName}
              </Text>
            )}
            <CustomTextInput
              value={Address}
              onChangeText={txt => {
                setAddress(txt);
              }}
              title={'Address'}
              placeholder={'Company Address'}
            />
            {Address != '' && (
              <Text
                style={{
                  color: 'red',
                  fontSize: responsiveFontSize(1.9),
                  marginLeft: responsiveWidth(7),
                }}>
                {badAddress}
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

            <SolidBtn
              onClick={() => {
                if (validate()) {
                  registerUser();
                }
              }}
              title={'Sign Up'}
            />
            <BorderBtn onClick={() => navigation.goBack()} title={'Login'} />
          </View>
          <Loader visible={loading} />
        </ScrollView>
      ) : (
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveWidth(100),
            marginTop: responsiveHeight(12),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              width: responsiveWidth(40),
              height: responsiveWidth(60),
            }}
            source={require('../../Image/check.png')}
          />

          <Text
            style={{
              fontSize: responsiveFontSize(2.8),
              fontWeight: 'bold',
              color: 'black',
            }}>
            Acoount Created Successfully !!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SignUpCompany;
