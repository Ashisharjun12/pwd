import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const Home = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);

  const increaseFontSize = () => {
    setFontSizeMultiplier(prevMultiplier => prevMultiplier + 0.3);
  };

  const decreaseFontSize = () => {
    setFontSizeMultiplier(prevMultiplier => prevMultiplier - 0.3);
  };

  return (
    <ScrollView style={{marginBottom: responsiveHeight(1)}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(9),
          marginBottom: responsiveHeight(2),
          backgroundColor: 'white',
          borderRadius: 9,
          width: responsiveWidth(90),
          marginLeft: responsiveWidth(5.5),
          borderWidth: 0.5,
        }}>
        <TextInput
          style={{
            flex: 1,
            marginLeft: responsiveWidth(4),
            fontSize: responsiveFontSize(1.7) * fontSizeMultiplier,
            color: 'black',
          }}
          placeholderTextColor={'black'}
          placeholder="Search Jobs..."
        />

        <View style={{marginRight: responsiveWidth(7)}}>
          <Feather name="search" color="#535353" size={30} />
        </View>
      </View>

      {/* Adding Cards */}
      <View
        style={{flexDirection: 'row', marginTop: responsiveHeight(6), gap: 20}}>
        <Card
          onClick={() => {}}
          title={'Exams'}
          imgsrc={require('../../Image/exam.png')}
          style={{marginLeft: responsiveWidth(4)}}
        
          textstyle={{fontSize:responsiveFontSize(2.7)*fontSizeMultiplier}}
        />
        <Card
          onClick={() => {}}
          title={'Workshop'}
          imgsrc={require('../../Image/web.png')}
          style={{
            marginLeft: responsiveWidth(4),
            backgroundColor: '#43C5AE',
          }}
          textstyle={{fontSize:responsiveFontSize(2.7)*fontSizeMultiplier}}
        />
      </View>
      <View
        style={{flexDirection: 'row', marginTop: responsiveHeight(6), gap: 20}}>
        <Card
          onClick={() => {
            navigation.navigate('Job');
          }}
          title={'Jobs'}
          imgsrc={require('../../Image/jobs.png')}
          style={{
            marginLeft: responsiveWidth(4),
            backgroundColor: '#F45E5E',
          }}
          textstyle={{fontSize:responsiveFontSize(2.7)*fontSizeMultiplier}}
        />
        <Card
          onClick={() => {}}
          title={'News'}
          imgsrc={require('../../Image/news.png')}
          style={{
            marginLeft: responsiveWidth(4),
            backgroundColor: '#60D68E',
          }}
          textstyle={{fontSize:responsiveFontSize(2.7)*fontSizeMultiplier}}
        />
      </View>

      {/* accessibility */}
      <TouchableOpacity
        onPress={() => {
          setIsVisible(true);
        }}>
        <Image
          style={{
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(5),
          }}
          source={require('../../Image/access.png')}
        />
      </TouchableOpacity>

      {/* modal */}
      <Modal
        isVisible={isVisible}
        animationIn={'slideInUp'}
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View
          style={{
            width: responsiveWidth(100),
            backgroundColor: '#ECEDF2',
            height: responsiveHeight(35),
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2.5),
              fontWeight: '500',
              textAlign: 'center',
              marginTop: responsiveHeight(2),
            }}>
            Accessibility Features
          </Text>

          <View>
            <TouchableOpacity
              onPress={increaseFontSize}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: responsiveHeight(3),
                backgroundColor: '#F1F4FF',
                width: responsiveWidth(80),
                alignSelf: 'center',
                height: responsiveHeight(6),
                borderRadius: 4,
                borderWidth: 0.6,
              }}>
              <MaterialCommunityIcons
                name="format-font-size-increase"
                color={'black'}
                size={34}
              />

              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.4),
                  fontWeight: '500',
                }}>
                Increase FontSize
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={decreaseFontSize}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: responsiveHeight(3),
                backgroundColor: '#F1F4FF',
                width: responsiveWidth(80),
                alignSelf: 'center',
                height: responsiveHeight(6),
                borderRadius: 4,
                borderWidth: 0.6,
              }}>
              <MaterialCommunityIcons
                name="format-font-size-decrease"
                color={'black'}
                size={34}
              />

              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.4),
                  fontWeight: '500',
                }}>
                Decrease FontSize
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: responsiveHeight(3),
                backgroundColor: '#F1F4FF',
                width: responsiveWidth(80),
                alignSelf: 'center',
                height: responsiveHeight(6),
                borderRadius: 4,
                borderWidth: 0.6,
              }}>
              <Ionicons
                name="color-filter-outline"
                color={'black'}
                size={34}
              />

              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.4),
                  fontWeight: '500',
                }}>
                Color Contrast
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Home;
