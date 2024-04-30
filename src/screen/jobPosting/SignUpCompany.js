import {View, Text, ScrollView} from 'react-native';
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

  //validation
  const validate = () => {
    let nameRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
    let emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    let contactRegex = /^\+\d{2,}-\d{6,}$/

    let validEmail = true;
    let validName = true;
    let validContact = true;
    let validCompanyName = true;
    let validAddress = true;
    let validPassword = true;

    //name

    if (name == '') {
      (validName = false), setBadName('Please Enter Your Name');
    } else if (name != '' && name.length < 3) {
      validName = false;
      setBadName('Please Enter Valid Name');
    } else if (
      name != '' &&
      name.length >= 3 &&
      !name.toString().match(nameRegex)
    ) {
      validName = false;
      setBadName('Please Enter Valid Name');
    } else if (name != '' && name.length >= 3) {
      validName = true;
      setBadName('');
    }

    //regex true

    if (name == '') {
      (validName = false), setBadName('Please Enter Your Name');
    } else if (name != '' && name.length < 3) {
      validName = false;
      setBadName('Please Enter Valid Name');
    } else if (
      name != '' &&
      name.length >= 3 &&
      name.toString().match(nameRegex)
    ) {
      validName = false;
      setBadName('Please Enter Valid Name');
    } else if (
      name != '' &&
      name.length >= 3 &&
      name.toString().match(nameRegex)
    ) {
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
    if(contact==''){
      validContact=false;
      setBadContact('Please Enter Valid Number')
    }else if(contact!='' && contact.length<10){
      validContact=false;
      setBadContact('Please Enter Valid Contact')
    }else if(contact!='' && !contact.length>=10 && contact.match(contactRegex)){
      validContact=false;
      setBadContact('Please Enter Valid Contact')
    }else if(contact!='' && contact.length>=10 && contact.match(contactRegex)){
      validContact=true;
      setBadContact('')

    }


    //companyname
    if(companyName==''){
      validCompanyName=false;
      setBadCompanyName('Please Enter this Field')
    }else if(companyName!=''){
      validCompanyName=true;
      setBadCompanyName('')
    }


    //address
    if(Address==''){
      validAddress=false;
      setBadCompanyName('Please Enter this Field')
    }else if(Address!=''){
      validAddress=true;
      setBadAddress('')
    }
  };

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
        <CustomTextInput
          value={name}
          onChnageText={txt => {
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
          onChnageText={txt => {
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
          onChnageText={txt => {
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
          onChnageText={txt => {
            companyName(txt);
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
          onChnageText={txt => {
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
          onChnageText={txt => {
            setPassword(txt);
          }}
          title={'Password'}
          placeholder={'Password'}
        />

        <SolidBtn
          onClick={() => {
            if (validate()) {
            }
          }}
          title={'Sign Up'}
        />
        <BorderBtn onClick={() => navigation.goBack()} title={'Login'} />
      </View>
    </ScrollView>
  );
};

export default SignUpCompany;
