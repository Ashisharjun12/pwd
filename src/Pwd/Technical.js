import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GoBack from '../common/GoBack';
import BigCard from './BigCard';
import {useNavigation} from '@react-navigation/native';

const Technical = () => {
  const navigation = useNavigation();

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
            Technical Courses
          </Text>
        </View>

        {/* courses */}

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(3),
            marginLeft: responsiveWidth(5.4),
          }}>
          <BigCard
            title={' Linked List'}
            textstyle={{fontSize: responsiveFontSize(2.6)}}
            style={{
              backgroundColor: '#5FB9B0',
              width: responsiveWidth(42),
              height: responsiveHeight(46),
              marginTop: responsiveHeight(3.4),
            }}
            onClick={() => { navigation.navigate('Linklist')}}
          />
          <BigCard
            title={' C++'}
            textstyle={{fontSize: responsiveFontSize(2.6)}}
            style={{
              backgroundColor: '#55B3B1',
              width: responsiveWidth(42),
              height: responsiveHeight(46),
              marginTop: responsiveHeight(3.4),
            }}
            onClick={() => {}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(3),
            marginLeft: responsiveWidth(5.4),
          }}>
          <BigCard
            title={' C++'}
            textstyle={{fontSize: responsiveFontSize(2.6)}}
            style={{
              backgroundColor: '#5FB9B0',
              width: responsiveWidth(42),
              height: responsiveHeight(46),
              marginTop: responsiveHeight(3.4),
            }}
            onClick={() => {}}
          />
          <BigCard
            title={'React Native'}
            textstyle={{fontSize: responsiveFontSize(2.6)}}
            style={{
              backgroundColor: '#5FB9B0',
              width: responsiveWidth(42),
              height: responsiveHeight(46),
              marginTop: responsiveHeight(3.4),
            }}
            onClick={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Technical;
