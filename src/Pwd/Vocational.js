import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import GoBack from '../common/GoBack';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BigCard from './BigCard';
import { useNavigation } from '@react-navigation/native';

const Vocational = () => {

    const navigation = useNavigation()

  return (
    <ScrollView style={{marginBottom: responsiveHeight(1)}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: responsiveHeight(2),
          }}>
          <GoBack />
          <Text
            style={{
              fontSize: responsiveFontSize(2.8),
              marginTop: responsiveHeight(1.6),
              marginLeft: responsiveWidth(12),
              color: 'black',
              fontWeight: '500',
            }}>
            Vocational Tranning
          </Text>
        </View>

        {/* ui */}

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(3),
            marginLeft: responsiveWidth(5.4),
          }}>
          <BigCard
            title={'Technical\n Courses'}
            textstyle={{fontSize: responsiveFontSize(2.6)}}
            style={{
              width: responsiveWidth(42),
              height: responsiveHeight(46),
              marginTop: responsiveHeight(3.4),
            }}
            onClick={() => {  navigation.navigate('Technical')}}
          />
          <BigCard
            title={' Non-Technical \n         Training'}
            textstyle={{fontSize: responsiveFontSize(2.6)}}
            style={{
                backgroundColor:'#5FB9B0',
              width: responsiveWidth(42),
              height: responsiveHeight(46),
              marginTop: responsiveHeight(3.4),
            }}
            onClick={() => { navigation.navigate('NonTech')}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(3),
            marginLeft: responsiveWidth(5.4),
          }}>
          <BigCard
            title={' StoryTelling'}
            textstyle={{fontSize: responsiveFontSize(2.6)}}
            style={{
                backgroundColor:'#00587A',
              width: responsiveWidth(42),
              height: responsiveHeight(46),
              marginTop: responsiveHeight(3.4),
            }}
            onClick={() => {navigation.navigate('Story')}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Vocational;
