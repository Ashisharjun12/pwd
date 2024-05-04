import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ViewBase,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../NormalBottom/Card';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const BlindAmputee = () => {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollView style={{marginBottom: responsiveHeight(1)}}>
    

      {/* Adding Cards */}

      <View
        style={{flexDirection: 'row', marginTop: responsiveHeight(6), gap: 8,marginLeft:responsiveWidth(3)}}>
        <Card 
        style={{width:responsiveWidth(42)}}
          onClick={() => {navigation.navigate('Vocational')}}
          title={'Vocational\n Traning'}
          
          imgsrc={require('../../Image/vocal.png')}
          styleCard={{marginLeft: responsiveWidth(2),height:responsiveHeight(40)}}
        />
        <Card
          onClick={() => {}}
          title={'Workshop'}
          imgsrc={require('../../Image/web.png')}
          style={{width:responsiveWidth(43), backgroundColor: '#43C5AE'}}
          styleCard={{marginLeft: responsiveWidth(2),height:responsiveHeight(40)}}
        />
      </View>
      <View
        style={{flexDirection: 'row', marginTop: responsiveHeight(3), gap: 8,marginLeft:responsiveWidth(3)}}>
        <Card
          onClick={() => {
            navigation.navigate('Job');
          }}
          title={'Jobs'}
          imgsrc={require('../../Image/jobs.png')}
          style={{width: responsiveWidth(43), backgroundColor: '#F45E5E'}}
          styleCard={{marginLeft: responsiveWidth(2),height:responsiveHeight(40)}}
        />
        <Card
          onClick={() => {}}
          title={'News'}
          imgsrc={require('../../Image/news.png')}
          style={{width: responsiveWidth(43), backgroundColor: '#60D68E'}}
          styleCard={{marginLeft: responsiveWidth(2),height:responsiveHeight(40)}}
        />
      </View>

      <TouchableOpacity
        onPress={() => { 
          setIsVisible(true);
        }}>
        <Image
          style={{
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(3),
          }} 
          source={require('../../Image/access.png')}
        />
      </TouchableOpacity>

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
            Accesibility Features
          </Text>

          <View>
            <TouchableOpacity onPress={()=>{}}
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
                Increse FontSize
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}
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
            <TouchableOpacity onPress={()=>{}}
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
              </Text>j fdioyzdg[9rg7-8z0t]
            </TouchableOpacity>
          </View> let a
        </View>
      </Modal>
    </ScrollView>
  );
};

export default BlindAmputee;
