import {View, Text, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()
  return (
    <ScrollView style={{marginBottom:responsiveHeight(1)}}>
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
            fontSize: responsiveFontSize(2.3),
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
        style={{flexDirection: 'row', marginTop: responsiveHeight(3), gap: 20}}>
        <Card
          onClick={() => {}}
          title={'Exams'}
          imgsrc={require('../../Image/exam.png')}
          style={{marginLeft: responsiveWidth(4)}}
        />
        <Card
          onClick={() => {}}
          title={'Workshop'}
          imgsrc={require('../../Image/web.png')}
          style={{marginLeft: responsiveWidth(4), backgroundColor: '#43C5AE'}}
        />
      </View>
      <View
        style={{flexDirection: 'row', marginTop: responsiveHeight(4), gap: 20}}>
        <Card
          onClick={() => {navigation.navigate('Job')}}
          title={'Jobs'}
          imgsrc={require('../../Image/jobs.png')}
          style={{marginLeft: responsiveWidth(4),backgroundColor: '#F45E5E'}}
        />
        <Card
          onClick={() => {}}
          title={'News'}
          imgsrc={require('../../Image/news.png')}
          style={{marginLeft: responsiveWidth(4), backgroundColor: '#60D68E'}}
        />
      </View>
      <View
        style={{flexDirection: 'row', marginTop: responsiveHeight(4), gap: 20}}>
        <Card
          onClick={() => {}}
          title={'Exams'}
          imgsrc={require('../../Image/exam.png')}
          style={{marginLeft: responsiveWidth(4)}}
        />
        <Card
          onClick={() => {}}
          title={'Workshop'}
          imgsrc={require('../../Image/web.png')}
          style={{marginLeft: responsiveWidth(4), backgroundColor: '#43C5AE'}}
        />
      </View>
    
    </ScrollView>
  );
};

export default Home;
