import {View, Text} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const QuestionCont = ({data}) => {
  return (
    <View>
      <View
        style={{
          marginTop: responsiveHeight(6),
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: responsiveFontSize(2.7),
            marginLeft: responsiveWidth(1.8),
            marginRight: responsiveWidth(17),
          }}>
          {data.question}
        </Text>
      </View>
      <View style={{marginTop: responsiveHeight(7)}}>
        <Text
          style={{
            color: '#8576FF',
            fontSize: responsiveFontSize(3.5),
            fontWeight: 'bold',
            textAlign: 'center',
            marginRight: responsiveWidth(15),
          }}>
          Play a Story Quiz
        </Text>
      </View>

      
    </View>
  );
};

export default QuestionCont;
