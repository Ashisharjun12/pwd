import {View, Text, Image,ScrollView} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GoBack from '../common/GoBack';
import SolidBtn from '../common/SolidBtn';

const Workshop = () => {
  return (
    <ScrollView>
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
            marginLeft: responsiveWidth(19),
            color: 'black',
            fontWeight: '500',
          }}>
          Workshop
        </Text>
      </View>

      {/* cards workshop */}

      <View
        style={{
          width: responsiveWidth(94),
          height: responsiveHeight(38),
          backgroundColor: '#8DECB4',
          alignSelf: 'center',
          marginTop: responsiveHeight(5),
          borderRadius: 5,
          borderWidth: 0.5,
        }}>
        <View>
          <View
            style={{
              width: responsiveWidth(50),
              backgroundColor: '#FCDC2A',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: responsiveHeight(4),
              marginLeft: responsiveWidth(2),
              borderRadius: 15,
              height: responsiveHeight(4),
              borderWidth: 0.4,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(2.4),
                fontWeight: '400',
              }}>
              Web Development
            </Text>

            {/* desc */}
            <Text
              style={{
                position: 'absolute',
                top: '120%',
                color: 'black',
                fontSize: responsiveFontSize(2),
                fontWeight: '500',
              }}>
              {
                'Join renowned web development expert Hitesh Choudhary for\nan immersive event focused on mastering\nthe art of web development.'
              }
            </Text>
          </View>

          <View
            style={{
              marginTop: responsiveHeight(-5),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: responsiveWidth(51),
            }}>
            <View
              style={{width: responsiveWidth(31), height: responsiveWidth(31)}}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%', borderRadius: 99}}
                source={require('../Image/img.jpg')}
              />
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(2.6),
                fontWeight: '500',
                marginLeft: responsiveWidth(3),
                marginTop: responsiveHeight(3),
              }}>
              Hitesh Sir
            </Text>
          </View>

          <SolidBtn
            onClick={() => {}}
            btnstyle={{
              width: responsiveWidth(85),
              height: responsiveHeight(7),
              marginTop: responsiveHeight(4),
            }}
            title={'Attent Now'}
          />
        </View>



      </View>

      {/* card 2 */}

      <View
        style={{
          width: responsiveWidth(94),
          height: responsiveHeight(38),
          backgroundColor: '#8DECB4',
          alignSelf: 'center',
          marginTop: responsiveHeight(3),
          borderRadius: 5,
          borderWidth: 0.5,
        }}>
        <View>
          <View
            style={{
              width: responsiveWidth(50),
              backgroundColor: '#FCDC2A',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: responsiveHeight(4),
              marginLeft: responsiveWidth(2),
              borderRadius: 15,
              height: responsiveHeight(4),
              borderWidth: 0.4,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(2.2),
                fontWeight: '400',
              }}>
              Mobile Development
            </Text>

            {/* desc */}
            <Text
              style={{
                position: 'absolute',
                top: '120%',
                color: 'black',
                fontSize: responsiveFontSize(2),
                fontWeight: '500',
              }}>
              {
                'Join renowned Mobile development expert Hitesh Choudhary for\nan immersive event focused on mastering\nthe art of Mobile development.'
              }
            </Text>
          </View>

          <View
            style={{
              marginTop: responsiveHeight(-5),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: responsiveWidth(51),
            }}>
            <View
              style={{width: responsiveWidth(31), height: responsiveWidth(31)}}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%', borderRadius: 99}}
                source={require('../Image/img.jpg')}
              />
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(2.6),
                fontWeight: '500',
                marginLeft: responsiveWidth(3),
                marginTop: responsiveHeight(3),
              }}>
              Hitesh Sir
            </Text>
          </View>

          <SolidBtn
            onClick={() => {}}
            btnstyle={{
              width: responsiveWidth(85),
              height: responsiveHeight(7),
              marginTop: responsiveHeight(4),
            }}
            title={'Attent Now'}
          />
        </View>



      </View>

    </ScrollView>
  );
};

export default Workshop;
